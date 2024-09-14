import React from 'react';
import { useSelector } from 'react-redux';
import { List, Avatar, Modal, Card } from 'antd';
import FilterSectors from '../components/FilterSectors';
import FilterJobTypes from '../components/FilterJobTypes';
import '../styles/Listings.css';
import '../features/listings/listingsSlice';

const Listings = () => {
  const listings = useSelector((state) => state.listings.listings);
  const selectedSectors = useSelector((state) => state.listings.selectedSectors);
  const selectedJobTypes = useSelector((state) => state.listings.selectedJobTypes);
  const [selectedListing, setSelectedListing] = React.useState(null);

  console.log("CreateListing bileşenindeki ilanlar:", listings);

  const filteredListings = listings.filter(listing =>
    (selectedSectors.length === 0 || selectedSectors.includes(listing.sector)) &&
    (selectedJobTypes.length === 0 || selectedJobTypes.includes(listing.jobType))
  );

  const handleItemClick = (listing) => {
    setSelectedListing(listing);
  };

  const handleCloseModal = () => {
    setSelectedListing(null);
  };

  // Get 4 random listings for 'En Çok Tıklanan İlanlar'
  const randomListings = [...listings]
    .sort(() => 0.5 - Math.random()) // Shuffle the listings
    .slice(0, 4); // Get 4 random listings

  return (
    <div className="listings-container">
      <div className="filters">
        <FilterSectors />
        <FilterJobTypes />
      </div>

      <div className="main-listings">
        <h1>İlanlar</h1>
        <List
          itemLayout="horizontal"
          dataSource={filteredListings}
          renderItem={(listing) => (
            <List.Item onClick={() => handleItemClick(listing)} className="listing-item">
              <Avatar src={listing.logo} size={64} className="listing-avatar" />
              <div className="listing-info">
                <h3>{listing.title}</h3>
                <p>{listing.company}</p>
                <p><strong>Job Type:</strong> {listing.jobType}</p>
              </div>
            </List.Item>
          )}
        />
      </div>

      <div className="sidebar">
        <h1>En Çok Tıklanan İlanlar</h1>
        <List
          itemLayout="horizontal"
          dataSource={randomListings}
          renderItem={(listing) => (
            <List.Item onClick={() => handleItemClick(listing)} className="popular-listing-item">
              <Avatar src={listing.logo} size={64} className="listing-avatar" />
              <div className="listing-info">
                <h4>{listing.title}</h4>
                <p>{listing.company}</p>
              </div>
            </List.Item>
          )}
        />
      </div>

      <Modal
        visible={!!selectedListing}
        onCancel={handleCloseModal}
        footer={null}
        centered
      >
        {selectedListing && (
          <Card className="listing-card">
            <Avatar src={selectedListing.logo} size={64} className="listing-avatar-large" />
            <div className="listing-details">
              <h2>{selectedListing.title}</h2>
              <p><strong>Company:</strong> {selectedListing.company}</p>
              <p><strong>Location:</strong> {selectedListing.location}</p>
              <p><strong>Job Type:</strong> {selectedListing.jobType}</p>
              <p>{selectedListing.description}</p>
            </div>
          </Card>
        )}
      </Modal>
    </div>
  );
};

export default Listings;
