import React from 'react';

interface BackgroundImageContainerProps {
  imageUrl: string;
  children: React.ReactNode;
}

const BackgroundImageContainer: React.FC<BackgroundImageContainerProps> = ({
  imageUrl,
  children,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,

        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="background-image-container"
    >
      {children}
    </div>
  );
};

export default BackgroundImageContainer;
