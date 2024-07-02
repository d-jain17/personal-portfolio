const resumeContainer=document.querySelector('.resume_container');
const resumeImage = document.querySelector('.resume');
const slider=document.querySelector('.slider');
const section=document.querySelector('.section');
const arrow=document.querySelector('.fa');
const tl=new TimelineMax();
const originalContainerHeight = resumeContainer.clientHeight;
const originalImageHeight = resumeImage.clientHeight;
const originalContainerWidth = resumeContainer.clientWidth;
const originalImageWidth = resumeImage.clientWidth;

// Initial state setup
tl.set(resumeContainer, { height: `${originalContainerHeight}px`, width: `${originalContainerWidth}px` });
tl.set(resumeImage, { height: `${originalImageHeight}px`, width: `${originalImageWidth}px` });

// Animation sequence
tl.fromTo(resumeContainer, 1, { height: "0%" }, { height: `${originalContainerHeight}px` })
  .fromTo(resumeImage, 1, { height: "0%" }, { height: `${originalImageHeight}px` }, "-=1");

  const originalSliderWidth = slider.clientWidth;
  // Initial state setup
tl.set(slider, {width: `${originalContainerWidth}px` });

// Animation sequence
tl.fromTo(slider, 1, { width: "0%" }, { width: `${originalSliderWidth}px` });