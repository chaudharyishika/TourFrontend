import React, { useState, useEffect } from "react";
import axios from "axios";

function ReviewSection() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ content: "", rating: 1 });
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setErrorMessage("Please log in to view reviews.");
          return;
        }

        const response = await axios.get("https://backsampl.onrender.com/api/review/reviews", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setReviews(response.data.data);
      } catch (error) {
        setErrorMessage(
          error.response?.data?.message || "An error occurred while fetching reviews."
        );
      }
    };

    fetchReviews();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle review submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      console.log("Token:", token);
      if (!token) {
        setErrorMessage("Please log in to submit a review.");
        return;
      }

      const response = await axios.post(
        "https://backsampl.onrender.com/api/review/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setReviews((prev) => [response.data.review, ...prev]);
        setFormData({ content: "", rating: 1 });
        setErrorMessage(""); // Clear error message if the submission is successful
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "An error occurred while submitting your review."
      );
    }
  };

  return (
    <div className="review-section bg-gray-100 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">User Reviews</h2>

      {/* Error Message */}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      {/* Review List */}
      <div className="reviews mb-6">
        {reviews?.map((review) => (
          <div
            key={review._id}
            className="review bg-white p-4 rounded-lg shadow mb-4"
          >
            <h3 className="font-semibold">{review.user?.name || "Anonymous"}</h3>
            <p>{review.content}</p>
            <p className="text-yellow-500">Rating: {review.rating}/5</p>
          </div>
        ))}
      </div>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow">
        <textarea
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          placeholder="Write your review here"
          rows="4"
          className="w-full border border-gray-300 p-2 rounded-lg mb-4"
          required
        ></textarea>
        <div className="mb-4">
          <label htmlFor="rating" className="mr-2">
            Rating:
          </label>
          <select
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-lg"
            required
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}

export default ReviewSection;
