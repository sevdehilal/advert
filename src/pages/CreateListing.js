import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addListing, deleteListing } from '../features/listings/listingsSlice';
import { Form, Input, Button, List, Avatar, Modal, Typography } from 'antd';
import { v4 as uuidv4 } from 'uuid';

const { Title } = Typography;

const CreateListing = () => {
  const [form] = Form.useForm();
  const [selectedListing, setSelectedListing] = useState(null);
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.listings.listings);
  console.log("Görüntülenen ilanlar:", listings);
  

  

  const handleSubmit = (values) => {
    const newListing = {
      id: uuidv4(), // UUID ile benzersiz ID oluştur
      ...values,
    };

    dispatch(addListing(newListing));
    form.resetFields();
  };

  const handleDelete = (id) => {
    dispatch(deleteListing(id));
  };

  const handleItemClick = (listing) => {
    setSelectedListing(listing);
  };

  const handleCloseModal = () => {
    setSelectedListing(null);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div style={{ width: '45%' }}>
        <Title level={2}>İlan Oluşturma</Title>
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item label="Başlık" name="title" rules={[{ required: true, message: 'Başlık gerekli!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Şirket" name="company" rules={[{ required: true, message: 'Şirket gerekli!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Lokasyon" name="location" rules={[{ required: true, message: 'Lokasyon gerekli!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Açıklama" name="description" rules={[{ required: true, message: 'Açıklama gerekli!' }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Logo URL" name="logo" rules={[{ required: true, message: 'Logo URL gerekli!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Sektör" name="sector" rules={[{ required: true, message: 'Sektör gerekli!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="İş Türü" name="jobType" rules={[{ required: true, message: 'İş Türü gerekli!' }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">İlan Ekle</Button>
          </Form.Item>
        </Form>
      </div>

      <div style={{ width: '45%' }}>
        <Title level={2}>Eklenen İlanlar</Title>
        <List
          itemLayout="horizontal"
          dataSource={listings}
          renderItem={listing => (
            <List.Item onClick={() => handleItemClick(listing)}>
              <List.Item.Meta
                avatar={<Avatar src={listing.logo} size={64} />}
                title={listing.title}
                description={`${listing.company} - ${listing.location}`}
              />
              <Button danger onClick={() => handleDelete(listing.id)}>Sil</Button>
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
          <div>
            <Avatar src={selectedListing.logo} size={64} />
            <Title level={3}>{selectedListing.title}</Title>
            <p><strong>Şirket:</strong> {selectedListing.company}</p>
            <p><strong>Lokasyon:</strong> {selectedListing.location}</p>
            <p>{selectedListing.description}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CreateListing;
