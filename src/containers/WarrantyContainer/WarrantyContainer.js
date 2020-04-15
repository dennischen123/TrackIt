import React from 'react';
import warrantyAPI from '../../api/warrantyAPI';
import Warranty from '../../components/Warranty/Warranty';

export default class WarrantyContainer extends React.Component {
    state = {
        warranties : []
    }
    componentDidMount() {
        warrantyAPI.index(this.props.uid)
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        warranties: res.data
                    })
                }
            })
            .catch(err => console.log(err))
        // let warranties = [
        //     {
        //         name: "Bedroom Tv",
        //         brand: "Samsung",
        //         warrantyLength: "2 years",
        //     },
        //     {
        //         name: "Electric Toothbrush",
        //         brand: "Philip",
        //         warrantyLength: "2 years",
        //     },
        //     {
        //         name: "Washer",
        //         brand: "Samsung",
        //         warrantyLength: "5 years",
        //     },
        //     {
        //         name: "Dryer",
        //         brand: "LG",
        //         warrantyLength: "2 years",
        //     }
        // ]
    }
    render() {
        let warranties = this.state.warranties;
        return (
            <div className="WarrantyContainer border border-dark text-center">
                <h4>Warranties</h4>
                <p>6 items</p>
                <div className="bg-light ml-3 mr-3">+</div>
                <div className="row row-cols-1">
                    {
                        warranties && warranties.map(warranty => {
                            return <Warranty warranty={warranty} key={warranty._id}/>
                        })
                    }
                    {/* <div className="col">Column</div> */}
                    {/* <div className="col">Column</div> */}
                    {/* <div className="col">Column</div> */}
                    {/* <div className="col">Column</div> */}
                </div>
                
            </div>
        );
    }
}