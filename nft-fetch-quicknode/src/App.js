//src/App.js
//Import libraries and components
import { useEffect, useState } from 'react';
import { ethers } from "ethers";
import NFTCard from './components/NFTCard';
import CollectionSearch from './components/CollectionSearch';


function App() {
  //State variables
  const [nfts, setNFTs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [address, setAddress] = useState('0xaAdBA140Ae5e4c8a9eF0Cc86EA3124b446e3E46A')


  // // function to fetch nfts by collection
  // const fetchCollection = async () => {
  //   const provider = new ethers.providers.JsonRpcProvider("https://floral-fabled-lambo.discover.quiknode.pro/b0df0004dfc79149ebfaacc6a0507a6aef6f6ebd/");
  //   //const collection = await provider.send("qn_fetchNFTsByCollection", {
  //   //  collection: address,
  //   //  page: 1,
  //   //  perPage: 10})
  //  const collection = await provider.send("qn_fetchNFTs", {
  //    wallet: "0x9377878bD2bc73ff6D95C7107B79AB693f869953",
  //    omitFields: ["provenance", "traits"],
  //    page: 1,
  //    perPage: 10,
  //    contracts: [
  //      "0x22C1f6050E56d2876009903609a2cC3fEf83B415",
  //      "0x495f947276749Ce646f68AC8c248420045cb7b5e",
  //      "0xa1eB40c284C5B44419425c4202Fa8DabFF31006b",
  //    ],
  //  })
  //  //console.log(collection['assets'])
  //  console.log(collection['assets'].forEach(element => console.log(element['name'],element['imageUrl'])))
  //   return collection['assets']
  // }


  // function to fetch nfts by collection
 const fetchCollection = async () => {
   const provider = new ethers.providers.JsonRpcProvider("https://floral-fabled-lambo.discover.quiknode.pro/b0df0004dfc79149ebfaacc6a0507a6aef6f6ebd/");
  const collection = await provider.send("qn_fetchNFTs", {
    wallet: "0x9377878bD2bc73ff6D95C7107B79AB693f869953",
    omitFields: ["provenance", "traits"],
    page: 1,
    perPage: 10,
    contracts: [
      "0x22C1f6050E56d2876009903609a2cC3fEf83B415",
      "0x495f947276749Ce646f68AC8c248420045cb7b5e",
      "0xa1eB40c284C5B44419425c4202Fa8DabFF31006b",
    ],
  })
  //console.log(collection['assets'])
  console.log(collection['assets'].forEach(element => console.log(element['name'],element['imageUrl'])))
   return collection['assets']
 }

  //useEffect renders every time address is set
  useEffect(() => {
    fetchCollection()
    .then(data => {
      setNFTs(data.tokens)
      setIsLoading(false)
      console.log(data.tokens)
    })
    .catch(err => setNFTs([]))

  }, [address]);
  console.log(nfts, "NFTs labled")
  
  //jsx containing our conditional rendering
  return (
    <div className='container mx-auto'>
      {/* <CollectionSearch searchText={(text) => setAddress(text)} />
      {!isLoading && nfts.length === 0 && <h1 className='text-5xl text-center mx-auto mt-32'>No Collection Found</h1>} */}
      <div className='grid grid-cols-3 gap-4'>
    
        {nfts.map(token => <NFTCard key={token.name} nft={token} />)}
      </div>
    </div>
  );
}

export default App;
