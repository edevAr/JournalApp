import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const ImageGalery = ({images=[]}) => {
  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={164}>
      {images.map((image) => (
        <ImageListItem key={image.asset_id}>
          <img
            srcSet={`${image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${image.url}?w=164&h=164&fit=crop&auto=format`}
            alt={image.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}