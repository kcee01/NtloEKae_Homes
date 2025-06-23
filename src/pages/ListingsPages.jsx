import React, { useState } from 'react';

const ListingsPage = () => {
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [listing, setListing] = useState(null);

  // Handle image selection
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    const urls = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  // Handle listing submission (simulate upload)
  const handleListingSubmit = (e) => {
    e.preventDefault();
    setListing({
      title: 'Sample Listing',
      description: 'This is a sample home listing.',
      images: previewUrls
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Listing Form */}
      <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Create Listing</h2>
        <form onSubmit={handleListingSubmit} className="space-y-4">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0 file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Listing
          </button>
        </form>
      </div>

      {/* Listing Display */}
      {listing && (
        <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
          <h3 className="text-xl font-bold text-gray-800">{listing.title}</h3>
          <p className="text-gray-600">{listing.description}</p>
          <div className="flex flex-wrap gap-4">
            {listing.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Listing ${index}`}
                className="w-48 h-32 object-cover rounded-lg shadow-sm"
              />
            ))}
          </div>
        </div>
      )}


    </div>
  );
};

export default ListingsPage;
