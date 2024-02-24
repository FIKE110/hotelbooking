import React from 'react'

const FeatureBox = ({feature,imagepath}:{feature:string,imagepath?:string}) => {
  return (
    <div style={{backgroundColor:"#5D71C7",
                width:100,
                height:100,
                border:"thin white solid",
                borderRadius:24,
                padding:12
                }}>
        <div style={{textAlign:"center",width:"100%",paddingTop:10}}>
          <img src={imagepath} style={{width:50,height:50,margin:0}}/>
            <p style={{color:"white",margin:0}}>{feature}</p>
        </div>
    </div>
  )
}

export default FeatureBox