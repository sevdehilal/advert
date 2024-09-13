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

  return (
    <div className="listings-container">
      <div className="filters">
        <FilterSectors />
        <FilterJobTypes />
      </div>
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

      {/* Modal for detailed view */}
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
