import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
// import { useEffect } from 'react';

// Function to read blogs data
function getBlogs() {
  const filePath = path.join(process.cwd(), 'public', 'blogs.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(fileData);
  return blogs;
}

// Generate metadata for each blog page
export async function generateMetadata({ params }) {
  // We need to await the params object first
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const blogs = getBlogs();
  const blog = blogs.find((blog) => blog.slug === slug);
  
  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }
  
  return {
    title: `${blog.title} | Dr. Abhishek Saxena`,
    description: blog.metaDescription || blog.excerpt || blog.content.substring(0, 160),
    openGraph: {
      title: blog.title,
      description: blog.metaDescription || blog.excerpt || blog.content.substring(0, 160),
      type: 'article',
      url: `https://yourdomain.com/blog/${blog.slug}`,
      images: [
        {
          url: blog.image || '/images/placeholder.jpg',
          width: 1200,
          height: 630,
          alt: blog.alt || blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.metaDescription || blog.excerpt || blog.content.substring(0, 160),
      images: [blog.image || '/images/placeholder.jpg'],
    },
  };
}

// Custom blog content renderer component
function BlogContent({ content }) {
  // Add custom styles directly to avoid relying just on Tailwind's prose
  const customStyles = `
    .blog-content h2 {
      font-size: 1.875rem;
      font-weight: 700;
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: #1e3a8a;
      line-height: 1.2;
    }
    
    .blog-content h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-top: 1.5rem;
      margin-bottom: 0.75rem;
      color: #1e40af;
      line-height: 1.3;
    }
    
    .blog-content p {
      margin-bottom: 1rem;
      line-height: 1.7;
      color:black;
    }

    .blog-content {
    color: black;
    }
  `;

  return (
    <div className="blog-content">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default async function SingleBlogPage({ params }) {
  // We need to await the params object first
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Get all blogs
  const blogs = getBlogs();
  
  // Find the blog with the matching slug
  const blog = blogs.find((blog) => blog.slug === slug);
  
  // If no blog is found, return a not found message
  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-cyan-400 bg-clip-text text-transparent mb-4">Blog Not Found</h1>
            <p className="text-gray-700 mb-4">Could not find blog with slug: {slug}</p>
            <Link 
              href="/blog"
              className="inline-block bg-gradient-to-r from-blue-900 to-cyan-400 text-white px-4 py-2 rounded-lg hover:opacity-90 transition duration-300"
            >
              Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Format the date
  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Hero section with image */}
      <div className="relative w-full h-80 md:h-96 max-w-6xl mx-auto mt-6">
        <Image 
          src={blog.image || '/images/placeholder.jpg'} 
          alt={blog.alt || blog.title}
          fill
          priority
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 rounded-lg"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{blog.title}</h1>
        </div>
      </div>
      
      {/* Content section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-10">
          {/* Author and date info */}
          <div className="flex items-center mb-8 pb-4 border-b border-gray-200">
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                  {blog.author.charAt(0)}
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-900">{blog.author}</p>
                <p className="text-sm text-gray-500">Published on {formattedDate}</p>
              </div>
            </div>
          </div>
          
          {/* Tags */}
          {blog.tags && (
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map((tag, index) => (
                <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {/* Using our custom BlogContent component */}
          <BlogContent content={blog.content} />
          
          {/* Back button */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <Link 
              href="/blog"
              className="inline-block bg-gradient-to-r from-blue-900 to-cyan-400 text-white px-6 py-3 rounded-lg hover:opacity-90 transition duration-300"
            >
              ← Back to All Blogs
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

// Generate static paths for all blogs
export async function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}