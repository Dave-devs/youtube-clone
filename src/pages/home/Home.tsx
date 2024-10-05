import './Home.css'
import SideBar from '../../components/sidebar/SideBar';
import Feed from '../../components/feed/Feed';
import { useState } from 'react';

type HomeProps = {
  sidebar: boolean
}

function Home({sidebar}: HomeProps) {
  const [category, setCategory] = useState<number>(0);

  return (
    <>
      <SideBar sidebar={sidebar} category={category} setCategory={setCategory} />
    <div className={`container ${sidebar ? "" : "large-container"}`}>
      <Feed category={category} />
    </div>
    </>
  )
}

export default Home