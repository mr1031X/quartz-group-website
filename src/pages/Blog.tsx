import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Search, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const regularPosts = filteredPosts.filter(p => p.id !== featuredPost.id);

  const blogImages = [
    '/images/epicor-dashboard.jpg',
    '/images/rfid-technology.jpg',
    '/images/smart-factory.jpg',
    '/images/manufacturing-line.jpg',
    '/images/quality-control.jpg',
    '/images/cloud-data-center.jpg',
    '/images/inventory-management.jpg',
    '/images/training-session.jpg'
  ];

  return (
    <div className="overflow-hidden">
      {/* ============================================
          [HERO SECTION — With Background Image]
          ============================================ */}
      <section className="section-hero pt-32 pb-20 relative">
        <div className="absolute inset-0">
          <img 
            src="/images/epicor-dashboard.jpg" 
            alt="Technology and analytics" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-navy)] via-[var(--deep-navy)]/95 to-[var(--deep-navy)]/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-navy)] via-transparent to-[var(--deep-navy)]/40"></div>
          <div className="absolute inset-0 bg-[var(--deep-navy)]/40"></div>
        </div>
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        
        <div className="container-premium relative z-10">
          <div className="max-w-3xl">
            <span className="tag mb-6 block">Blog</span>
            <h1 className="text-h1 text-white mb-6">
              Insights from the front lines
            </h1>
            <p className="text-body-lg">
              Epicor expertise, RFID innovations, and lessons from 500+ implementations. 
              No fluff. Just actionable insights.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          [SEARCH & FILTER — Band]
          ============================================ */}
      <section className="section-band border-y border-[var(--slate-800)]">
        <div className="container-premium">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--slate-400)]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[var(--deep-navy)] border border-[var(--slate-800)] rounded-lg text-white placeholder-[var(--slate-400)] focus:outline-none focus:border-[var(--electric-blue)] transition-colors"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-[var(--electric-blue)] text-white'
                      : 'bg-[var(--slate-800)] text-[var(--slate-400)] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          [FEATURED POST — Large Card]
          ============================================ */}
      {!searchTerm && selectedCategory === 'All' && (
        <section className="section-dark">
          <div className="container-premium">
            <span className="text-micro mb-6 block">Featured</span>
            
            <Link to={`/blog/${featuredPost.slug}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Featured Image */}
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <img 
                    src="/images/smart-factory.jpg" 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-navy)]/80 to-transparent"></div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="tag">{featuredPost.category}</span>
                    <span className="flex items-center gap-2 text-sm text-[var(--slate-400)]">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                  </div>
                  
                  <h2 className="text-h2 text-white mb-4 group-hover:text-[var(--electric-blue)] transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-body text-[var(--slate-400)] mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--electric-blue)] to-[var(--cyan-glow)] flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {featuredPost.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{featuredPost.author}</p>
                      <p className="text-xs text-[var(--slate-400)]">Author</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ============================================
          [POSTS GRID — Cards]
          ============================================ */}
      <section className="section-dark border-t border-[var(--slate-800)]">
        <div className="container-premium">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-h3 text-white">
              {searchTerm || selectedCategory !== 'All' ? 'Search Results' : 'Latest Articles'}
            </h2>
            <span className="text-sm text-[var(--slate-400)]">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            </span>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(searchTerm || selectedCategory !== 'All' ? filteredPosts : regularPosts).map((post, index) => (
                <Link 
                  key={index}
                  to={`/blog/${post.slug}`}
                  className="group card-feature"
                >
                  {/* Blog Image */}
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                    <img 
                      src={blogImages[index % blogImages.length]} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-navy)]/60 to-transparent"></div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="tag text-xs">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-[var(--slate-400)]">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[var(--electric-blue)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-[var(--slate-400)] mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-2 pt-4 border-t border-[var(--slate-800)]">
                    <User className="w-4 h-4 text-[var(--slate-400)]" />
                    <span className="text-sm text-[var(--slate-400)]">{post.author}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[var(--slate-400)] text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4 text-[var(--electric-blue)] font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============================================
          [TAGS SECTION — Band]
          ============================================ */}
      <section className="section-band border-y border-[var(--slate-800)]">
        <div className="container-premium">
          <div className="flex items-center gap-3 mb-6">
            <Tag className="w-5 h-5 text-[var(--electric-blue)]" />
            <span className="text-micro">Popular Topics</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[var(--slate-800)] text-[var(--slate-400)] rounded-lg text-sm hover:bg-[var(--electric-blue)]/10 hover:text-[var(--electric-blue)] transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          [NEWSLETTER — Dark Band]
          ============================================ */}
      <section className="section-dark">
        <div className="container-premium">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-h3 text-white mb-4">
              Get insights delivered
            </h2>
            <p className="text-[var(--slate-400)] mb-8">
              Monthly updates on Epicor best practices, RFID innovations, and industry insights. 
              No spam. Unsubscribe anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[var(--slate-900)] border border-[var(--slate-800)] rounded-lg text-white placeholder-[var(--slate-400)] focus:outline-none focus:border-[var(--electric-blue)] transition-colors"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          [CTA BAND — With Background Image]
          ============================================ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/consulting-meeting.jpg" 
            alt="Team consultation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--electric-blue)]/95 to-[var(--cyan-glow)]/95"></div>
        </div>
        
        <div className="container-premium relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 text-white mb-6">
              Have questions about what you read?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Our team is here to help. Reach out to discuss how these insights apply to your situation.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--electric-blue)] font-semibold rounded-lg hover:bg-white/90 transition-colors">
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
