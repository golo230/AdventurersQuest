  document.getElementById('download-button').addEventListener('click', () => {
    alert('Thank you for your interest! The game is downloading...');
    // Example file path (you can replace this with the actual file path)
    const filePath = 'downloads/game-installation.exe'; 
  
    // Create an anchor element to trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = filePath; // The file path to download
    downloadLink.download = 'RPG_Adventure_Setup.exe'; // The name the file will have when downloaded
  
    // Append the link to the document and trigger the click event to start the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink); // Clean up by removing the link
  });
  