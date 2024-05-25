interface BackgroundImageWithPlaceholderProps {
  src: string | null;
  className: string;
}

const BackgroundImageWithPlaceholder: React.FC<
  BackgroundImageWithPlaceholderProps
> = ({ src, className }) => {
  const placeholderImage = '/images/logo/Logo_Image_Light_Moharu.png';
  const backgroundImage = src ? `url(${src})` : `url(${placeholderImage})`;

  return (
    <div
      className={className}
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
      }}
    ></div>
  );
};

export default BackgroundImageWithPlaceholder;