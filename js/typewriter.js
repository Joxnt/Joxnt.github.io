window.onload = init;

  function init(){
    // the code to be called when the dom has loaded
    // #document has its nodes

    //getting text length
    const textArea = document.getElementById('typewriter');
    text = textArea.textContent;
    charCount = text.length;
    //alert(charCount)

    //CSS variables 
    var root = document.querySelector(':root');
    var rootStyles = getComputedStyle(root);
    
    //typewriterLen
    root.style.setProperty('--typewriterLen', charCount)
    
    //typewriterSpeed 
    var speed = `${charCount / 6}s`
    root.style.setProperty('--typewriterSpeed', speed)
  }

