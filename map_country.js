// Add styles for text content and visualizations
var style = document.createElement('style');
style.innerHTML = `
    /* Style for the text content at the top */
    #text-content {
        text-align: center;
        margin: 20px 0; /* Add some margin for spacing */
        padding: 10px;
        background-color: #f4f4f4; /* Optional: Different background color */
        width: 100%; /* Use full width */
    }

    /* Container for the visualizations */
    #container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 10px; /* Reduce space between the two boxes */
        padding: 20px;
        border: 2px solid #ccc; /* Border around the whole container */
        background-color: #fff;
        max-width: 1600px; /* Increase the maximum width */
        width: 100%; /* Allow container to use full width */
        overflow: hidden; /* Prevent content overflow */
    }
    
    /* Each visualization box */
    .viz-container {
        width: 55%; /* Set width as a percentage for automatic scaling */
        padding: 10px;
        border: 2px solid #888; /* Border for each visualization */
        background-color: #fff;
        box-sizing: border-box; /* Include padding and border in the width calculation */
    }

    /* Overall body settings */
    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        margin: 0;
    }
`;
document.head.appendChild(style);

// Add text content to the body
var textContent = document.createElement('div');
textContent.id = 'text-content';
textContent.innerHTML = `
    <h1>Homework Week 10</h1>
    <p>From the two figures below we can observe the temperatures in different longitudes and latitudes in different months.</p>
`;
document.body.prepend(textContent);

// Import JSON configuration files
var vg_1 = "map_country.vg.json";
var vg_2 = "w10.json";

// Embed the original map with adjusted size
vegaEmbed("#map", vg_1, {width: 600, height: 500}).then(function(result) {
    // Access the Vega view instance
}).catch(console.error);

// Embed the new temperature bubble plot with adjusted size
vegaEmbed("#temperature-bubble-plot", vg_2, {width: 600, height: 500}).then(function(result) {
    // Access the Vega view instance
}).catch(console.error);
