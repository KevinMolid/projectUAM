const willy = {
    name: 'Willy', 
    img: 'images/Willy.jpg'
  } 
  
  const svetlana = {
    name: 'Svetlana', 
    img: 'images/Svetlana.jpg'
  } 
  
  export const introEvents = [
    {character: willy, 
      text: [
        "Hei sladdos! Velkommen til Prosjekt UAM!", 
        "Jeg er Willy. Det er jeg som styrer skuta her...", 
        "Skal du jobbe her, må du ha klær! ", 
        "Gå og snakk med Svetlana. Og du... Lykke til!"
      ], 
    options: [
      "Next", 
      "Next", 
      "Next",
      ["Go to Svetlana"]
      ]
    }, 
    {character: svetlana, 
      text: [
        "Ja?"
      ],
    options: [
      "Next"
      ]
    } 
    
    ]