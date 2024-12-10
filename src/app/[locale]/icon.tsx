import { ImageResponse } from 'next/og';
import React from 'react';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

/**
 * Renders a favicon using custom inline code and style
 * @returns The website's favicon
 */
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX Element
      <div
        style={{
          fontSize: 24,
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          background: 'rgb(47,139,154)',
          borderRadius: '50%',
        }}
      >
        <div
          style={{
            marginTop: '4px',
            marginRight: '-5px',
          }}
        >
          M
        </div>
        <div
          style={{
            marginBottom: '4px',
            marginLeft: '1px',
          }}
        >
          L
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
