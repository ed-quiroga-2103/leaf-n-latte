import React from 'react';

interface BackgroundImageContainerProps {
  imageUrl: string;
  children: React.ReactNode;
  cropHeight?: string; // Optional prop to crop the image vertically
}

const BackgroundImageContainer: React.FC<BackgroundImageContainerProps> = ({
  imageUrl,
  children,
  cropHeight = '100%', // Default to full height if cropHeight is not provided
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: cropHeight, // Use cropHeight to control the height
        minHeight: '100vh', // Ensure it covers full viewport height
      }}
      className="background-image-container"
    >
      {children}
    </div>
  );
};

export default BackgroundImageContainer;
