<template>
    <div
      id="image-demo-preview-popup-container"
      :style="{
        width: '100%',
        height: '400px',
        backgroundColor: 'rgba(128, 128, 128, 0.18)',
        position: 'relative',
        overflow: 'hidden',
        lineHeight: '400px',
        textAlign: 'center',
      }"
    >
      <tu-image
        width="200"
        src="https://cdn.pixabay.com/photo/2020/04/04/03/42/paperwork-5000691_640.png"
        :preview-props="{
          popupContainer: '#image-demo-preview-popup-container',
          closable: false,
        }"
      />
    </div>
  </template>
  