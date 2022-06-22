function BountyHeader({ borderColor, text }) {
    console.log(borderColor)
    return <div className="bg-[#5a4860] mb-8 text-lg font-bold uppercase text-white px-[13px] rounded-t-lg py-3 border-b-4 " style={{ borderColor}}>
        {text}
    </div>
}

export default BountyHeader