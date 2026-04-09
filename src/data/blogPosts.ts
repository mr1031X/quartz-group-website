export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  slug: string;
  image: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Quartz Group + Xemelgo: A New Era for Epicor Users",
    excerpt: "Our exclusive partnership with Xemelgo brings real-time RFID inventory tracking to Epicor ERP. 99% accuracy. 24-hour setup. Here's what it means for manufacturers.",
    content: `
      <p>We're announcing our strategic partnership with Xemelgo, the leader in RFID-powered inventory and asset tracking solutions. This collaboration marks a significant milestone in our mission to help manufacturers achieve unprecedented operational visibility.</p>
      
      <h3>The Problem with Manual Tracking</h3>
      <p>Most manufacturers still rely on barcode scanning and manual data entry for inventory tracking. The result:</p>
      <ul>
        <li>Inventory accuracy averages 65-75%</li>
        <li>Physical counts consume hundreds of hours monthly</li>
        <li>WIP visibility is essentially non-existent</li>
        <li>Year-end inventory shuts down operations for days</li>
      </ul>
      
      <p>The cost is staggering. A mid-size manufacturer with $50M in inventory can easily have $12-17M in inventory variance. That's working capital tied up in uncertainty.</p>
      
      <h3>The Xemelgo Solution</h3>
      <p>Xemelgo's RFID platform changes the game. By tagging inventory with passive RFID tags and installing readers at key points, we achieve:</p>
      <ul>
        <li><strong>99%+ inventory accuracy</strong> — without physical counts</li>
        <li><strong>Real-time WIP tracking</strong> — see every unit's location instantly</li>
        <li><strong>50% reduction in search time</strong> — find any asset in seconds</li>
        <li><strong>24-hour setup</strong> — minimal disruption to operations</li>
        <li><strong>&lt;12 month ROI</strong> — typically much faster</li>
      </ul>
      
      <h3>Epicor Integration</h3>
      <p>The real power comes from integration. Our solution connects Xemelgo directly to Epicor Kinetic, providing:</p>
      <ul>
        <li>Real-time inventory updates in Epicor</li>
        <li>Automated WIP transactions</li>
        <li>Touchless receiving and shipping</li>
        <li>Asset tracking with calibration alerts</li>
      </ul>
      
      <p>No middleware. No batch uploads. Real-time synchronization that just works.</p>
      
      <h3>Who Should Consider This?</h3>
      <p>RFID tracking delivers the highest ROI for:</p>
      <ul>
        <li>Manufacturers with $5M+ in inventory</li>
        <li>Operations with complex WIP (multiple stages, long cycle times)</li>
        <li>Companies struggling with inventory accuracy</li>
        <li>Organizations with high-value assets to track</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>We start with a site assessment to determine tag requirements, reader placement, and integration points. Most implementations are live within 2-4 weeks.</p>
      
      <p>Ready to learn more? Visit <a href="https://quartztrack.com">QuartzTrack</a> or contact us for a demo.</p>
    `,
    author: "Chris Smalley",
    date: "February 25, 2026",
    slug: "quartz-group-xemelgo-partnership",
    image: "/images/blog-xemelgo.jpg",
    category: "Partnerships",
    tags: ["Xemelgo", "RFID", "Epicor", "Inventory Tracking", "Manufacturing"]
  },
  {
    id: "2",
    title: "Walmart's RFID Mandate: What Manufacturers Need to Know",
    excerpt: "Walmart's RFID mandate is reshaping retail supply chains. If you sell to Walmart — or want to — here's what you need to know about compliance.",
    content: `
      <p>Walmart's RFID mandate for suppliers represents a watershed moment for inventory tracking technology. As the world's largest retailer, Walmart's requirements are pushing RFID adoption throughout the supply chain.</p>
      
      <h3>The Mandate Explained</h3>
      <p>Starting in 2024, Walmart requires RFID tags on all products from participating suppliers. The requirements include:</p>
      <ul>
        <li>GS1-encoded UHF RFID tags (96-bit EPC)</li>
        <li>Specific tag placement guidelines</li>
        <li>Verification of read rates at distribution centers</li>
        <li>Integration with Walmart's receiving systems</li>
      </ul>
      
      <h3>Why RFID?</h3>
      <p>Walmart's goal is simple: 100% inventory accuracy. With RFID, they can:</p>
      <ul>
        <li>Receive shipments without manual scanning</li>
        <li>Track inventory in real-time throughout the supply chain</li>
        <li>Reduce out-of-stocks and overstock situations</li>
        <li>Improve demand forecasting accuracy</li>
      </ul>
      
      <h3>Impact on Manufacturers</h3>
      <p>For manufacturers, compliance requires:</p>
      
      <p><strong>Upfront Investment:</strong></p>
      <ul>
        <li>RFID tag costs: $0.05-0.15 per unit</li>
        <li>Printer/encoder hardware: $3,000-8,000</li>
        <li>Integration with existing systems</li>
        <li>Process changes and training</li>
      </ul>
      
      <p><strong>Ongoing Benefits:</strong></p>
      <ul>
        <li>Improved internal inventory accuracy</li>
        <li>Faster receiving and shipping processes</li>
        <li>Better data for demand planning</li>
        <li>Competitive advantage with retail partners</li>
      </ul>
      
      <h3>The Epicor Integration Challenge</h3>
      <p>Most manufacturers struggle with the ERP integration piece. How do you:</p>
      <ul>
        <li>Generate GS1-compliant RFID tags from Epicor data?</li>
        <li>Record RFID transactions back to Epicor?</li>
        <li>Maintain lot/serial traceability?</li>
        <li>Handle mixed RFID/non-RFID shipments?</li>
      </ul>
      
      <p>This is where our Xemelgo integration shines. We've built the Epicor connector that handles all of this automatically.</p>
      
      <h3>Timeline for Compliance</h3>
      <p>Walmart's rollout is phased by category. If you're in an affected category, you typically have 6-12 months to comply. Don't wait until the last minute — the RFID tag supply chain can get constrained.</p>
      
      <h3>How We Can Help</h3>
      <p>Our Walmart RFID compliance service includes:</p>
      <ul>
        <li>Compliance assessment and gap analysis</li>
        <li>RFID tag encoding and printing setup</li>
        <li>Epicor integration configuration</li>
        <li>Process documentation and training</li>
        <li>Verification testing with Walmart's systems</li>
      </ul>
      
      <p>Contact us to discuss your compliance requirements.</p>
    `,
    author: "Matthew Hellwig",
    date: "April 05, 2023",
    slug: "walmart-rfid-mandate",
    image: "/images/blog-walmart.jpg",
    category: "Industry News",
    tags: ["Walmart", "RFID", "Supply Chain", "Compliance", "Retail"]
  },
  {
    id: "3",
    title: "How to Write Epicor Support Tickets That Get Resolved Faster",
    excerpt: "The quality of your support ticket directly impacts resolution time. Here's our guide to writing tickets that get answers — not more questions.",
    content: `
      <p>After 15 years of supporting Epicor implementations, we've seen thousands of support tickets. The difference between tickets resolved in hours versus days often comes down to one thing: information quality.</p>
      
      <h3>The Anatomy of a Great Ticket</h3>
      <p>A well-written support ticket includes:</p>
      
      <p><strong>1. Clear Subject Line</strong></p>
      <p>Summarize the issue in 10 words or less. Include the module and error type.</p>
      <p>❌ "Help, it's not working"<br>
      ✅ "MRP Error 12345: Constraint violation in PartBin table"</p>
      
      <p><strong>2. Detailed Description</strong></p>
      <ul>
        <li>What happened?</li>
        <li>When did it start?</li>
        <li>Under what circumstances?</li>
        <li>Who is affected?</li>
      </ul>
      
      <p><strong>3. Steps to Reproduce</strong></p>
      <p>Exact steps that lead to the issue. Number them. Be specific about menus, buttons, and fields.</p>
      
      <p><strong>4. Expected vs. Actual Results</strong></p>
      <p>What should happen vs. what actually happens. Include specific values where relevant.</p>
      
      <p><strong>5. Screenshots</strong></p>
      <p>Visual evidence of the problem. Include the full screen, not just the error message.</p>
      
      <p><strong>6. Error Messages</strong></p>
      <p>Exact text of any error messages. Copy-paste, don't paraphrase.</p>
      
      <h3>Common Ticket Mistakes</h3>
      
      <p><strong>Vague Descriptions</strong></p>
      <p>"It's slow" doesn't help. "The Job Entry screen takes 15 seconds to load after clicking New" does.</p>
      
      <p><strong>Missing Context</strong></p>
      <p>Recent changes (upgrades, patches, new customizations) are critical context. Always include them.</p>
      
      <p><strong>No User Information</strong></p>
      <p>Does this affect all users or just one? Specific users help us isolate security or profile issues.</p>
      
      <p><strong>Multiple Issues in One Ticket</strong></p>
      <p>Create separate tickets for separate issues. It allows parallel work and cleaner tracking.</p>
      
      <h3>Our Support Process</h3>
      <p>When you submit a ticket to Quartz Group:</p>
      <ol>
        <li><strong>Acknowledgment:</strong> You'll receive confirmation within 15 minutes during business hours.</li>
        <li><strong>Triage:</strong> We assess priority and assign to the right specialist.</li>
        <li><strong>Investigation:</strong> We analyze logs, reproduce the issue, and develop a solution.</li>
        <li><strong>Resolution:</strong> We implement the fix and verify it works in your environment.</li>
        <li><strong>Follow-up:</strong> We ensure you're satisfied and document the solution.</li>
      </ol>
      
      <h3>Priority Levels</h3>
      <ul>
        <li><strong>Critical:</strong> System down or major function broken. Response: 1 hour.</li>
        <li><strong>High:</strong> Significant impact, workaround available. Response: 4 hours.</li>
        <li><strong>Medium:</strong> Moderate impact. Response: 24 hours.</li>
        <li><strong>Low:</strong> Questions, enhancements. Response: 48 hours.</li>
      </ul>
      
      <h3>Emergency Support</h3>
      <p>Premium clients have access to our 24/7 emergency hotline. Average emergency response time: 47 minutes.</p>
      
      <h3>Conclusion</h3>
      <p>Great tickets get faster resolution. Take an extra 5 minutes to include all relevant information. Your future self will thank you.</p>
    `,
    author: "Matthew Hellwig",
    date: "July 13, 2019",
    slug: "tickets-please-support-tips",
    image: "/images/blog-tickets.jpg",
    category: "Support",
    tags: ["Epicor Support", "Best Practices", "Ticket Management", "Customer Service"]
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentSlug: string, limit: number = 2): BlogPost[] => {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost) return [];
  
  return blogPosts
    .filter(post => post.slug !== currentSlug)
    .filter(post => 
      post.tags.some(tag => currentPost.tags.includes(tag)) ||
      post.category === currentPost.category
    )
    .slice(0, limit);
};
