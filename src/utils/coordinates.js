// Comprehensive list of country coordinates (latitude, longitude)
const countryCoordinates = {
  'Afghanistan': { latitude: 33.9391, longitude: 67.7100 },
  'Albania': { latitude: 41.1533, longitude: 20.1683 },
  'Algeria': { latitude: 36.7372, longitude: 3.0863 },
  'Angola': { latitude: -11.2027, longitude: 17.8739 },
  'Argentina': { latitude: -38.4161, longitude: -63.6167 },
  'Armenia': { latitude: 40.0691, longitude: 45.0382 },
  'Australia': { latitude: -25.2744, longitude: 133.7751 },
  'Austria': { latitude: 47.5162, longitude: 14.5501 },
  'Azerbaijan': { latitude: 40.1431, longitude: 47.5769 },
  'Bangladesh': { latitude: 23.685, longitude: 90.3563 },
  'Belgium': { latitude: 50.8503, longitude: 4.3517 },
  'Benin': { latitude: 9.3077, longitude: 2.3158 },
  'Bhutan': { latitude: 27.5142, longitude: 90.4336 },
  'Bolivia': { latitude: -16.2902, longitude: -63.5887 },
  'Brazil': { latitude: -14.2350, longitude: -51.9253 },
  'Bulgaria': { latitude: 42.7339, longitude: 25.4858 },
  'Burkina Faso': { latitude: 12.2383, longitude: -1.5616 },
  'Cambodia': { latitude: 12.5657, longitude: 104.9910 },
  'Cameroon': { latitude: 7.3697, longitude: 12.3547 },
  'Canada': { latitude: 56.1304, longitude: -106.3468 },
  'Chile': { latitude: -35.6751, longitude: -71.5430 },
  'China': { latitude: 35.8617, longitude: 104.1954 },
  'Colombia': { latitude: 4.5709, longitude: -74.2973 },
  'Costa Rica': { latitude: 9.7489, longitude: -83.7534 },
  'Croatia': { latitude: 45.1000, longitude: 15.2000 },
  'Cuba': { latitude: 21.5218, longitude: -77.7812 },
  'Czech Republic': { latitude: 49.8175, longitude: 15.4730 },
  'Denmark': { latitude: 56.2639, longitude: 9.5018 },
  'Ecuador': { latitude: -1.8312, longitude: -78.1834 },
  'Egypt': { latitude: 26.8206, longitude: 30.8025 },
  'El Salvador': { latitude: 13.7942, longitude: -88.8965 },
  'Estonia': { latitude: 58.5953, longitude: 25.0136 },
  'Ethiopia': { latitude: 9.1450, longitude: 40.4897 },
  'Finland': { latitude: 61.9241, longitude: 25.7482 },
  'France': { latitude: 46.2276, longitude: 2.2137 },
  'Georgia': { latitude: 42.3154, longitude: 43.3569 },
  'Germany': { latitude: 51.1657, longitude: 10.4515 },
  'Ghana': { latitude: 7.9465, longitude: -1.0232 },
  'Greece': { latitude: 39.0742, longitude: 21.8243 },
  'Guatemala': { latitude: 15.7835, longitude: -90.2308 },
  'Honduras': { latitude: 15.1991, longitude: -86.2419 },
  'Hungary': { latitude: 47.1625, longitude: 19.5033 },
  'India': { latitude: 20.5937, longitude: 78.9629 },
  'Indonesia': { latitude: -0.7893, longitude: 113.9213 },
  'Iran': { latitude: 32.4279, longitude: 53.6880 },
  'Iraq': { latitude: 33.2232, longitude: 43.6793 },
  'Ireland': { latitude: 53.1424, longitude: -7.6921 },
  'Israel': { latitude: 31.0461, longitude: 34.8516 },
  'Italy': { latitude: 41.8719, longitude: 12.5674 },
  'Japan': { latitude: 36.2048, longitude: 138.2529 },
  'Jordan': { latitude: 30.5852, longitude: 36.2384 },
  'Kazakhstan': { latitude: 48.0196, longitude: 66.9237 },
  'Kenya': { latitude: -0.0236, longitude: 37.9062 },
  'Korea, South': { latitude: 35.9078, longitude: 127.7669 },
  'Kuwait': { latitude: 29.3117, longitude: 47.4818 },
  'Kyrgyzstan': { latitude: 41.2044, longitude: 74.7661 },
  'Laos': { latitude: 19.8563, longitude: 102.4955 },
  'Latvia': { latitude: 56.8796, longitude: 24.6032 },
  'Lebanon': { latitude: 33.8547, longitude: 35.8623 },
  'Libya': { latitude: 26.3351, longitude: 17.2283 },
  'Lithuania': { latitude: 55.1694, longitude: 23.8813 },
  'Luxembourg': { latitude: 49.8153, longitude: 6.1296 },
  'Madagascar': { latitude: -18.7669, longitude: 46.8691 },
  'Malaysia': { latitude: 4.2105, longitude: 101.9758 },
  'Mali': { latitude: 17.5707, longitude: -3.9962 },
  'Mexico': { latitude: 23.6345, longitude: -102.5528 },
  'Mongolia': { latitude: 46.8625, longitude: 103.8467 },
  'Morocco': { latitude: 31.7917, longitude: -7.0926 },
  'Myanmar': { latitude: 21.9162, longitude: 95.9560 },
  'Nepal': { latitude: 28.3949, longitude: 84.1240 },
  'Netherlands': { latitude: 52.1326, longitude: 5.2913 },
  'New Zealand': { latitude: -40.9006, longitude: 174.8860 },
  'Nicaragua': { latitude: 12.8654, longitude: -85.2072 },
  'Nigeria': { latitude: 9.0820, longitude: 8.6753 },
  'Norway': { latitude: 60.4720, longitude: 8.4689 },
  'Pakistan': { latitude: 30.3753, longitude: 69.3451 },
  'Panama': { latitude: 8.5380, longitude: -80.7821 },
  'Paraguay': { latitude: -23.4425, longitude: -58.4438 },
  'Peru': { latitude: -9.1900, longitude: -75.0152 },
  'Philippines': { latitude: 12.8797, longitude: 121.7740 },
  'Poland': { latitude: 51.9194, longitude: 19.1451 },
  'Portugal': { latitude: 39.3999, longitude: -8.2245 },
  'Romania': { latitude: 45.9432, longitude: 24.9668 },
  'Russia': { latitude: 61.5240, longitude: 105.3188 },
  'Saudi Arabia': { latitude: 23.8859, longitude: 45.0792 },
  'Senegal': { latitude: 14.4974, longitude: -14.4524 },
  'Serbia': { latitude: 44.0165, longitude: 21.0059 },
  'Singapore': { latitude: 1.3521, longitude: 103.8198 },
  'Slovakia': { latitude: 48.6690, longitude: 19.6990 },
  'Slovenia': { latitude: 46.1512, longitude: 14.9955 },
  'Somalia': { latitude: 5.1521, longitude: 46.1996 },
  'South Africa': { latitude: -30.5595, longitude: 22.9375 },
  'Spain': { latitude: 40.4637, longitude: -3.7492 },
  'Sri Lanka': { latitude: 7.8731, longitude: 80.7718 },
  'Sudan': { latitude: 12.8628, longitude: 30.2176 },
  'Sweden': { latitude: 60.1282, longitude: 18.6435 },
  'Switzerland': { latitude: 46.8182, longitude: 8.2275 },
  'Syria': { latitude: 34.8021, longitude: 38.9968 },
  'Taiwan': { latitude: 23.5937, longitude: 121.0254 },
  'Tajikistan': { latitude: 38.8610, longitude: 71.2761 },
  'Tanzania': { latitude: -6.3690, longitude: 34.8888 },
  'Thailand': { latitude: 15.8700, longitude: 100.9925 },
  'Tunisia': { latitude: 33.8869, longitude: 9.5375 },
  'Turkey': { latitude: 38.9637, longitude: 35.2433 },
  'Uganda': { latitude: 1.3733, longitude: 32.2903 },
  'Ukraine': { latitude: 48.3794, longitude: 31.1656 },
  'United Arab Emirates': { latitude: 23.4241, longitude: 53.8478 },
  'United Kingdom': { latitude: 55.3781, longitude: -3.4360 },
  'United States': { latitude: 37.0902, longitude: -95.7129 },
  'Uruguay': { latitude: -32.5228, longitude: -55.7658 },
  'Uzbekistan': { latitude: 41.3775, longitude: 64.5853 },
  'Venezuela': { latitude: 6.4238, longitude: -66.5897 },
  'Vietnam': { latitude: 14.0583, longitude: 108.2772 },
  'Yemen': { latitude: 15.5527, longitude: 48.5164 },
  'Zambia': { latitude: -13.1339, longitude: 27.8493 },
  'Zimbabwe': { latitude: -19.0154, longitude: 29.1549 }
};

// Country bounds for precise zooming (SW and NE corners)
const countryBounds = {
  'Bangladesh': [[20.7, 88.0], [26.6, 92.7]],
  'India': [[8.4, 68.1], [35.9, 97.4]],
  'United States': [[24.5, -124.7], [49.3, -66.9]],
  'China': [[18.2, 73.5], [53.5, 134.8]],
  'Brazil': [[-33.7, -73.9], [5.3, -34.8]],
  'Russia': [[41.2, 19.6], [81.9, 180.0]]
  // Add more as needed
};

// Normalize country names for consistent lookup
const normalizedCoordinates = Object.entries(countryCoordinates).reduce((acc, [country, coords]) => {
  acc[normalizeCountryName(country)] = coords;
  return acc;
}, {});

const normalizedBounds = Object.entries(countryBounds).reduce((acc, [country, bounds]) => {
  acc[normalizeCountryName(country)] = bounds;
  return acc;
}, {});

function normalizeCountryName(country) {
  if (!country) return '';
  return country
    .toLowerCase()
    .replace(/[,.-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getCountryCoordinates(country) {
  if (!country) {
    console.warn('No country provided');
    return { latitude: 0, longitude: 0 };
  }

  const normalizedCountry = normalizeCountryName(country);
  const coordinates = normalizedCoordinates[normalizedCountry];

  if (!coordinates) {
    console.warn(`Coordinates not found for country: ${country} (normalized: ${normalizedCountry})`);
    return { latitude: 0, longitude: 0 };
  }

  return coordinates;
}

export function getCountryBounds(country) {
  if (!country) return null;
  
  const normalizedCountry = normalizeCountryName(country);
  const bounds = normalizedBounds[normalizedCountry];
  
  if (!bounds) {
    // If bounds not found, create an approximate bounding box using the center coordinates
    const coords = normalizedCoordinates[normalizedCountry];
    if (!coords) return null;
    
    const { latitude, longitude } = coords;
    // Create a 5-degree bounding box around the center point
    return [
      [latitude - 2.5, longitude - 2.5],
      [latitude + 2.5, longitude + 2.5]
    ];
  }
  
  return bounds;
}