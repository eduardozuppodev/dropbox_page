import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Section from './components/Section';

import data from './data';

function App() {
  return (
    <>
      <Section 
        variant="blue"
        title={data[0].title}
        description={data[0].description}
      />
      <Section 
        variant="beige"
        title={data[0].title}
        description={data[0].description}
      />
      <Section 
        variant="blue"
        title={data[0].title}
        description={data[0].description}
      />
      <Section 
        variant="blue"
        title={data[0].title}
        description={data[0].description}
      />
      <Section 
        variant="blue"
        title={data[0].title}
        description={data[0].description}
      />

      <GlobalStyles />
    </>
  );
}

export default App;
