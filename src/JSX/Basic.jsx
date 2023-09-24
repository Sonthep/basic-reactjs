function Basic(){
    const name = "SonthepDev"
    const age = 24
    const likes = ["ReacJS", "Programer", "Coder"]
    return (
    <>
    <h1>{name}is GOD</h1>
    <h2>{age}</h2>
    <h2>{likes}</h2>
    <h2>{true}</h2>  {/* not show boolean  */}
    <h2>{String(true)}</h2>
    {
        true ? <h3>Test</h3> : null
    }

    {
        likes.map(like => <h3 key={like}>{like}</h3>)
    }
    
    </>
    )
}

export default Basic