import React, { useState, useEffect } from "react";

const EditBlog = ({ title }) => {
  const [blogTitle, setBlogTitle] = useState(title); // Initialize state with the title prop directly
  const [content, setContent] = useState("");
  const [metadescription, setMetadescription] = useState("");
  const [status, setStatus] = useState("draft");
  const [slug, setSlug] = useState("");
  const [metakeywords, setMetakeywords] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You are not authenticated");
        return;
      }

      try {
        const response = await fetch(`http://localhost:7000/article/${slug}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        if (data) {
          setBlogTitle(data.title || "");
          setContent(data.content || "");
          setMetadescription(data.metadescription || "");
          setMetakeywords(data.metakeywords || "");
          setStatus(data.status || "draft");
          setSlug(data.slug || "");
          setPhoto(data.photo || null);
        } else {
          setErrorMessage("No data received for this article");
        }
      } catch (err) {
        setErrorMessage(err.message);
      }
    };

    if (title) {
      fetchBlog();
    }
  }, [title]);

  useEffect(() => {
    if (blogTitle) {
      setSlug(blogTitle.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, ""));
    }
  }, [blogTitle]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);

    const reader = new FileReader();
    reader.onloadend = () => setPhotoPreview(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You are not authenticated");
      return;
    }

    const formData = new FormData();
    formData.append("title", blogTitle);
    formData.append("content", content);
    formData.append("metadescription", metadescription);
    formData.append("status", status);
    formData.append("slug", slug);
    formData.append("metakeywords", metakeywords);
    if (photo) formData.append("photo", photo);

    try {
      const response = await fetch(`http://localhost:7000/article/${slug}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        setSuccessMessage("Blog updated successfully!");
        setErrorMessage(""); // Clear any previous error message
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Failed to update blog");
      }
    } catch (err) {
      setErrorMessage("An error occurred while updating the blog.");
    }
  };

  const isFormValid = blogTitle && content && slug;

  return (
    <div>
      <h2>Update Blog</h2>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Metadescription:</label>
          <textarea
            value={metadescription}
            onChange={(e) => setMetadescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Metakeywords:</label>
          <textarea
            value={metakeywords}
            onChange={(e) => setMetakeywords(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Status:</label>
          <input
            type="radio"
            name="status"
            value="published"
            checked={status === "published"}
            onChange={(e) => setStatus(e.target.value)}
          />
          Published
          <input
            type="radio"
            name="status"
            value="draft"
            checked={status === "draft"}
            onChange={(e) => setStatus(e.target.value)}
          />
          Draft
        </div>
        <div>
          <label>Slug:</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Photo:</label>
          <input
            type="file"
            onChange={handleFileChange}
          />
          {photoPreview && <img src={photoPreview} alt="Preview" style={{ width: '100px', height: 'auto' }} />}
        </div>
        <button type="submit" disabled={!isFormValid}>Update Blog</button>
      </form>
    </div>
  );
};

export default EditBlog;

