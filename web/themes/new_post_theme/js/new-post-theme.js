/**
 * @file
 * new_post_theme behaviors.
 */


(function (Drupal) {

  'use strict';

  Drupal.behaviors.newPostTheme = {
    attach(context, settings) {
      
      let paragraphs = document.querySelectorAll('.paragraph.paragraph--type--post-text');

      let maxHeight = 0;
      paragraphs.forEach(function (paragraph) {
        let paragraphHeight = paragraph.clientHeight;
        maxHeight = Math.max(maxHeight, paragraphHeight);
       console.log(maxHeight);
      });

      paragraphs.forEach(function (paragraph) {
        paragraph.style.height = maxHeight + 'px';
        console.log(paragraph.style.height);
      });

     console.log(maxHeight);
    




      
      let multiParagraphs = document.querySelectorAll('.paragraph--type--multi-post .field--name-field-post-2, .paragraph--type--multi-post .field--name-field-post');
      console.log(multiParagraphs);
      multiParagraphs.forEach(function (multiParagraph) {
        multiParagraph.style.marginBottom = (maxHeight - 80) + 'px';
        console.log(multiParagraph.style.marginBottom);
      });



      
      
      
    document.addEventListener('DOMContentLoaded', function () {

      document.addEventListener('click', function (event) {
        
        let messegeBlocks = document.querySelectorAll('.field--name-field-message');
            messegeBlocks.forEach(function (block) { 
                block.style.display = 'none';
            });

        console.log(event.target);
        console.log(event.target.tagName !== 'IMG'); 
        if (event.target.tagName !== 'IMG') {
            
            let messegeBlocks = document.querySelectorAll('.field--name-field-message');
            messegeBlocks.forEach(function (block) { 
                block.style.display = 'none';
            });
        } else {

          let parents = event.target.parentElement.parentElement.parentElement.parentElement;
          console.log(parents);
         let firstChild = parents.lastElementChild;
         let secondChild = firstChild.lastElementChild;
         let thirdChild = secondChild.lastElementChild;
         console.log(thirdChild);
        
         if (thirdChild.classList.contains('field--name-field-link') ) {
      parents.querySelector('.field--name-field-message').style.display = 'block';
         }
      }
    });



});
    }
  };

} (Drupal));
