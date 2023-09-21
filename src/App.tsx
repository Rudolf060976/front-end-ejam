import React from 'react';
import styles from './App.module.css'
import Layout from './components/layout/Layout';
import Upsell from './pages/upsell/Upsell';

function App() {
  return (
    <div className={styles.siteWrapper}>
      <Layout>
				<Upsell />
			</Layout>
    </div>
  );
}

export default App;
