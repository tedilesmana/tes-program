import React, { Component } from 'react';
import axios from 'axios';
import {
  Link
} from "react-router-dom";

class VHome extends Component {

    state = {
        post: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000')
            .then(function(response) {
                // handle success
                console.log(response.data.response);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
            .then(function() {
                // always executed
            });
    }

    render() {
        return (
            <div id="c-wrapper">
                <div class="c-right">
                    <div class="cl-right">
                        <img src={require('../assets/img/img001.jpg')} alt="boohoo" className="img001"/>
                        <img src={require('../assets/img/img002.png')} alt="boohoo" className="img002"/>
                        <span class="btn-large">
                            Follow
                        </span>

                        <div class="c-text">
                            <div class="text">
                                <h4 class="judul001">Adobe</h4>
                                <h4 class="hastag">@Adobe</h4>
                                <p>
                                    Changing the world through digital experiences. Need help? Visit us at <Link to="">http://helpx.adobe.com/support.html</Link>  or reach out to <Link to="">@AdobeCare</Link> 
    .
                                </p>
                                <span class="lc"><i class="fa fa-map-marker"></i> Location: All over the world.</span>
                                <span class="lc"><i class="fas fa-link"></i><Link to="">theblog.adobe.com</Link></span>
                                <span class="lc"><i class="fa fa-calendar"></i> Joined August 2009</span>
                                <div>
                                    <span class="follow"><b>500</b> Following</span>
                                    <span class="follow"><b>625.5K</b> Followers</span>
                                </div>
                            </div>
                            <div id="nav-battom">
                                <span class="menu-bottom">Tweets</span>
                                <span class="menu-bottom">Tweets & replies</span>
                                <span class="menu-bottom">Media</span>
                                <span class="menu-bottom">Likes</span>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="c-left">
                    <div id="l-list001">
                        <h4>Baru di Twitter?</h4>
                        <p>Daftar sekarang untuk mendapatkan timeline personalisasi Anda</p>
                        <button>Daftar</button>
                    </div>
                    <div id="l-list002">
                        <img src={require('../assets/img/img003.jpg')} alt="boohoo" className="img00 tl"/>
                        <img src={require('../assets/img/img004.jpg')} alt="boohoo" className="img00"/>
                        <img src={require('../assets/img/img005.jpg')} alt="boohoo" className="img00 tr"/>
                        <img src={require('../assets/img/img006.jpg')} alt="boohoo" className="img00 bl"/>
                        <img src={require('../assets/img/img007.jpg')} alt="boohoo" className="img00"/>
                        <img src={require('../assets/img/img008.jpg')} alt="boohoo" className="img00 br"/>
                    </div>
                    <div id="l-list003">
                        <div class="head">
                            <h4>
                                Anda mungkin menyukai
                            </h4>
                        </div>
                        <div class="c-follow">
                            <img src="" alt=""/>
                            <div>
                                <b>Adobe Photoshop</b>
                                <br/>
                                <span>@Photoshop</span>
                            </div>
                            <div>
                                <span class="btn-menu-login">Ikuti</span>
                            </div>
                        </div>
                        <div class="c-follow">
                            <img src="" alt=""/>
                            <div>
                                <b>Adobe Creative Cloud</b>
                                <br/>
                                <span>@CreativeCloud</span>
                            </div>
                            <div>
                                <span class="btn-menu-login">Ikuti</span>
                            </div>
                        </div>

                        <div class="c-follow">
                            <img src="" alt=""/>
                            <div>
                                <b>Adobe Illustrator</b>
                                <br/>
                                <span>@Ilustrator</span>
                            </div>
                            <div>
                                <span class="btn-menu-login">Ikuti</span>
                            </div>
                        </div>


                        <div class="head">
                            <span><Link to="">Tampilkan Lebih Banyak</Link></span>
                        </div>
                    </div>

                    <div id="l-list003">
                        <div class="head">
                            <h4>
                                Tren
                            </h4>
                        </div>
                        <div class="c-follow">
                            <div>
                                <span>1. Popular</span>
                                <br/>
                                <b>#BTSxCorden</b>
                            </div>
                            <div>
                                <span class="btn-menu-login">Ikuti</span>
                            </div>
                        </div>
                        <div class="c-follow">
                            <div>
                                <span>2. Popular</span>
                                <br/>
                                <b>#STOPBLAMINGHANBIN</b>
                            </div>
                            <div>
                                <span class="btn-menu-login">Ikuti</span>
                            </div>
                        </div>

                        <div class="c-follow">
                            <div>
                                <span>3. Popular</span>
                                <br/>
                                <b>#JanjiJiwaUnggaran</b>
                            </div>
                            <div>
                                <span class="btn-menu-login">Ikuti</span>
                            </div>
                        </div>


                        <div class="head">
                            <span><Link to="">Tampilkan Lebih Banyak</Link></span>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default VHome;