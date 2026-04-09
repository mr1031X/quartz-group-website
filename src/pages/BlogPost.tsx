import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Share2, Twitter, Linkedin, Facebook, ArrowRight } from 'lucide-react';
import { getBlogPostBySlug, getRelatedPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const relatedPosts = slug ? getRelatedPosts(slug, 2) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out this article: ${post.title}`;

  return (
    <div className="overflow-hidden">
      {/* ============================================
          [HERO SECTION — Post Header]
          ============================================ */}
      <section className="section-hero pt-32 pb-20">
        <div className="absolute inset-0 bg-grid opacity-50"></div>
        <div className="absolute inset-0 bg-mesh"></div>
        
        <div className="container-premium relative z-10">
          <Link 
            to="/blog"
            className="inline-flex items-center text-[var(--slate-400)] hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl">
            {/* Category & Date */}
            <div className="flex items-center gap-4 mb-6">
              <span className="tag">{post.category}</span>
              <span className="flex items-center gap-2 text-sm text-[var(--slate-400)]">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-h1 text-white mb-8">
              {post.title}
            </h1>
            
            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--electric-blue)] to-[var(--cyan-glow)] flex items-center justify-center">
                <span className="text-white font-bold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-white font-medium">{post.author}</p>
                <p className="text-sm text-[var(--slate-400)]">Quartz Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          [CONTENT SECTION]
          ============================================ */}
      <section className="section-dark">
        <div className="container-premium">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <div className="relative aspect-video bg-gradient-to-br from-[var(--electric-blue)]/20 to-[var(--cyan-glow)]/20 rounded-2xl overflow-hidden mb-12">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-9xl font-bold text-[var(--electric-blue)]/20">{post.title.charAt(0)}</span>
                </div>
              </div>

              {/* Article Content */}
              <article 
                className="prose prose-lg max-w-none prose-headings:text-white prose-headings:font-['Inter_Tight'] prose-p:text-[var(--slate-400)] prose-li:text-[var(--slate-400)] prose-strong:text-white prose-a:text-[var(--electric-blue)] prose-a:no-underline hover:prose-a:underline prose-blockquote:border-[var(--electric-blue)] prose-blockquote:text-white"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-[var(--slate-800)]">
                <div className="flex items-center gap-3 mb-4">
                  <Tag className="w-5 h-5 text-[var(--electric-blue)]" />
                  <span className="text-micro">Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[var(--slate-800)] text-[var(--slate-400)] rounded-lg text-sm hover:bg-[var(--electric-blue)]/10 hover:text-[var(--electric-blue)] transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-[var(--slate-800)]">
                <div className="flex items-center gap-3 mb-4">
                  <Share2 className="w-5 h-5 text-[var(--electric-blue)]" />
                  <span className="text-micro">Share this article</span>
                </div>
                <div className="flex gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#1DA1F2] text-white rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#0077B5] text-white rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#4267B2] text-white rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Author Card */}
              <div className="card-feature">
                <p className="text-micro mb-4">About the Author</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--electric-blue)] to-[var(--cyan-glow)] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{post.author}</p>
                    <p className="text-sm text-[var(--slate-400)]">Quartz Group</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--slate-400)]">
                  Epicor consultant with 10+ years of experience helping manufacturers 
                  and distributors optimize their operations.
                </p>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="card-feature">
                  <p className="text-micro mb-4">Related Articles</p>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost, index) => (
                      <Link
                        key={index}
                        to={`/blog/${relatedPost.slug}`}
                        className="block group"
                      >
                        <p className="text-white font-medium group-hover:text-[var(--electric-blue)] transition-colors line-clamp-2 mb-1">
                          {relatedPost.title}
                        </p>
                        <p className="text-xs text-[var(--slate-400)]">{relatedPost.date}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="card-feature bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--cyan-glow)]/10 border-[var(--electric-blue)]/30">
                <p className="text-white font-medium mb-2">Have questions?</p>
                <p className="text-sm text-[var(--slate-400)] mb-4">
                  Our team is here to help you apply these insights to your situation.
                </p>
                <Link to="/contact" className="btn-ghost text-sm">
                  Contact us <ArrowRight className="w-4 h-4 inline" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          [CTA BAND — Gradient]
          ============================================ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--cyan-glow)]"></div>
        
        <div className="container-premium relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 text-white mb-6">
              Want to implement what you just read?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Schedule a consultation. We'll discuss how these strategies apply to your specific situation.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--electric-blue)] font-semibold rounded-lg hover:bg-white/90 transition-colors">
              Schedule Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
