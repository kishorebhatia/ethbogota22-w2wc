//Import libraries and components
import { useEffect, useState } from 'react';
import { ethers } from "ethers";


const NFTModalData = (): JSX.Element => {

  //State variables
  const [nfts, setNFTs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [address, setAddress] = useState('0xaAdBA140Ae5e4c8a9eF0Cc86EA3124b446e3E46A')

  let [isOpen, setIsOpen] = useState(true)

  const onNewNFTButtonClick = () => {
    setIsOpen(true)
  }

  // function to fetch nfts by collection
 const fetchCollection = async () => {
  const provider = new ethers.providers.JsonRpcProvider("https://floral-fabled-lambo.discover.quiknode.pro/b0df0004dfc79149ebfaacc6a0507a6aef6f6ebd/");
 const collection = await provider.send("qn_fetchNFTs", {
    // wallet: "0xfFE7857F6656eA1Dc8b066F4539D9195f619877A" , ToDo: Quicknode bug
  wallet: "0x91b51c173a4bdaa1a60e234fc3f705a16d228740",
  //  wallet: "0x9377878bD2bc73ff6D95C7107B79AB693f869953",
   omitFields: ["provenance", "traits"],
   page: 1,
   perPage: 10,
  //  contracts: [
  //    "0x22C1f6050E56d2876009903609a2cC3fEf83B415",
  //    "0x495f947276749Ce646f68AC8c248420045cb7b5e",
  //    "0xa1eB40c284C5B44419425c4202Fa8DabFF31006b",
  //  ],
 })
//  console.log(collection['assets'].forEach(element => console.log(element['name'],element['imageUrl'])))
  return collection['assets']
}

 //useEffect renders every time address is set
 useEffect(() => {
   fetchCollection()
   .then(data => {
      setNFTs(data)
      setIsLoading(false)
   })
   .catch(err => setNFTs([]))

 }, [address]);

 const NFTCard = ({nft}) => {
    console.log(nft.imageUrl)
  return (
      <div className='max-w-lg rounded overflow-hidden shadow-lg'>
          <img src={nft.imageUrl} alt="" className='w-full' />
          <div className='px-4 py-4'>
              <div className='font-bold text-teal-600 text-xl mb-2'>{nft.name}</div>
              {/* <ul>
                  <li>Owner:<strong>{nft.currentOwner}</strong></li>
              </ul> */}
          </div>
          <div className='px-6 py-4'>
              {nft.traits?.map((trait, index) => (
              <span key={index} className="inline-block bg-gray-200
               rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2">{trait['trait_type']}:{trait.value}
              </span>))}
              <div>
              </div>
          </div>
      </div>
  )
}
 
 //jsx containing our conditional rendering
 return (
    
   <div className='container mx-auto'>
     {/* {!isLoading && nfts.length === 0 && <h1 className='text-5xl text-center mx-auto mt-32'>No Collection Found</h1>}  */}
     <div className='grid grid-cols-3 gap-4'>
       {nfts.map(token => <NFTCard key={token.name} nft={token} />)}
     </div>
     {/* {nfts.map(token => console.log(token, "token"))} */}
   </div>
 );
}

export default NFTModalData