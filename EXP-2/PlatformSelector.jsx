import { useSelector } from "react-redux";

const PlatformSelector = ({ selected, setSelected }) => {

    const platforms = useSelector(
        state => state.platforms
    );

    const handleChange = (name) => {

        if(selected.includes(name)){

            setSelected(
                selected.filter(
                    p => p!==name
                )
            );

        }else{

            setSelected([...selected,name]);

        }

    }

    return (

        <div>

            <h3>Select Platforms</h3>

            {
                platforms.map(platform=>(
                    <label key={platform.id}>

                        <input
                            type="checkbox"
                            checked={selected.includes(platform.name)}
                            onChange={()=>handleChange(platform.name)}
                        />

                        {platform.name}

                    </label>
                ))
            }

        </div>

    )

}

export default PlatformSelector;
