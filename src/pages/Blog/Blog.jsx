import React, { useState } from "react";
import blogcard1 from "../../assets/blogcard1.png";
import blogcard2 from "../../assets/blogcard2.png";
import blogcard3 from "../../assets/blogcard3.png";
import blogcard4 from "../../assets/blogcard4.png";
import Footer from "../../components/Footer/Footer";
import whatsapp from "../../assets/whatsapp.png";
import call from "../../assets/call.png";

function Blog() {
  const [expandedPost, setExpandedPost] = useState(null);

  const togglePost = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  const blogs = [
    {
      id: 1,
      image: blogcard1,
      title: "Top 10 Destinations to Visit in 2025",
      excerpt:
        "2025 is set to be an exciting year for travel! From exotic beaches to bustling cities, these destinations offer unique experiences for every traveler.",
      content:
        "Explore the best beaches in the Maldives, dive into the history of ancient Rome, or hike through the breathtaking landscapes of New Zealand. Whether you’re an adventure seeker or a relaxation enthusiast, this list has something for everyone. Check out our detailed guide to plan your trip to these top destinations in 2025!",
    },
    {
      id: 2,
      image: blogcard2,
      title: "The Ultimate Guide to Sustainable Travel",
      excerpt:
        "Sustainable travel is becoming more important than ever. In this guide, we share practical tips for minimizing your environmental impact while exploring the world.",
      content:
        "Embrace the slow travel movement by taking the train instead of flying, staying in eco-friendly hotels, and reducing your plastic waste. In this post, we also share tips on responsible tourism and how to support local communities in a sustainable way.",
    },
    {
      id: 3,
      image: blogcard3,
      title: "Must-Try Foods Around the World",
      excerpt:
        "Traveling is not just about seeing new places, but also experiencing new flavors. In this post, we explore the must-try foods from different countries and regions.",
      content:
        "Whether it's sushi in Japan, pasta in Italy, or street food in Thailand, every destination offers unique culinary delights. Learn about the best places to try local delicacies and discover new flavors from every corner of the globe.",
    },
    {
      id: 4,
      image: blogcard4,
      title: "How to Travel on a Budget",
      excerpt:
        "Traveling doesn't have to be expensive! In this post, we share some practical tips and tricks for traveling on a budget.",
      content:
        "Learn how to save money by booking flights in advance, using budget-friendly transportation options, and staying in hostels or guesthouses. Additionally, we share tips on finding free activities and local deals in major cities to make your travel experience affordable and enjoyable.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 lg:pt-[1000px] sm:pt-[50px] pb-5 ">
      <div className="py-8  sm:py-12 bg-white">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          Travel Blog
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-indigo-600 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-700 text-sm mb-4">{blog.excerpt}</p>
                {expandedPost === blog.id && (
                  <div className="text-gray-600 text-sm mb-4">
                    <p>{blog.content}</p>
                  </div>
                )}
                <button
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
                  onClick={() => togglePost(blog.id)}
                >
                  {expandedPost === blog.id ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
     <div className="fixed bottom-4 right-4">
      <a href="https://wa.me/917048992287?text=Hello How can I help you?" target="_blank">
      <img src={whatsapp} className="w-24 h-24 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 "/>
      </a>
      </div>
      <div className="fixed bottom-4 left-4 ">
      <a href="tel:+91-7048992287" target="_blank">
      <img src={call} className="w-24 h-24 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 "/>
      </a>

      </div>
    </div>
  );
}

export default Blog;
