const DefaultMeta = (props) => {
    const { defaultvalue, name, deactive, onChange } = props;
    const { hideDefaultValue, hideName, hideDeactive } = props;
    
    return (
        <>
            {
                !hideDeactive &&
                <div className="deactive">
                    <span>{__("Deactive", "catalogx")}</span> 
                    <input
                        type="checkbox"
                        checked={deactive}
                        onChange={(event) => { onChange( 'deactive', ! event.target.checked ) }}
                    />
                </div>
            }
            {
                !hideName &&
                <div className="name">
                    <span>{__("Set name", "catalogx")}</span> 
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => { onChange( 'name', ! event.target.name ) }}
                    />
                </div>
            }
            {
                !hideDefaultValue &&
                <div className="default-value">
                    <span>{__("Set Defaut Value", "catalogx")}</span>
                    <input
                        type="text"
                        value={defaultvalue}
                        onChange={(event) => { onChange( 'defaultvalue', ! event.target.name ) }}
                    />
                </div>
            }
        </>
    );
}

export default DefaultMeta;