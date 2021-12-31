import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import style from './createPokemon.module.css';

export default function CreatePokemon() {
    const stateP = useSelector(state => state.types)

    const dispatch = useDispatch()
    const { push } = useHistory()
    const urlValidate = /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/



    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState('');
    const [rating, setRating] = useState(0);
    const [releaseDate, setReleaseDate] = useState('');
    const [platforms, setPlatforms] = useState([]);
    const [genres, setGenres] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        if (name === '') return alert('Name is required');
        if (description === '') return alert('Description is required');
        if (img === '') return alert('Url image is required');
        if (!urlValidate.test(img)) return alert('Image it most be an URL');
        if (releaseDate === '') return alert('Release date is required');
        if (platforms.length === 0) return alert('You most select at least one platform');
        if (genres.length === 0) return alert('You most select at least one genre');
        else {
            let body = { name, description, img, releaseDate, rating, platforms, genres }
            
            alert('Your videogame was created!')
            push("/videogames")
        }
    };

    function handleChange(e) {
        switch (e.target.name) {
            case 'name': setName(e.target.value); break;
            case 'description': setDescription(e.target.value); break;
            case 'img': setImg(e.target.value); break;
            case 'rating': setRating(e.target.value); break;
            case 'releaseDate': setReleaseDate(e.target.value); break;
            case 'platforms': setPlatforms([...platforms, e.target.value]); break;
            case 'genres': setGenres([...genres, e.target.value]); break;
            default: break
        }
    };

    return (
        <div className={style.bigDiv}>
            
            <div className={style.global}>
                <div className={`${style.container} ${style.center}`}>
                    <form onSubmit={(e) => handleSubmit(e)} className={style.form} autocomplete="off">
                        <div className={style.subtitle}>Let's create your videogame!</div>
                        <div className={`${style.input_container} ${style.ic1}`}>
                            <input className={style.input} type="text" name="name" value={name} required onChange={handleChange} placeholder="Name" />
                        </div>
                        <div className={`${style.input_container} ${style.ic2}`} >
                            <input className={style.input} type="text" name="description" value={description} required onChange={handleChange} placeholder="Description" />
                        </div>
                        <div className={`${style.input_container} ${style.ic2}`}>
                            <input className={style.input} type="text" name="img" value={img} required onChange={handleChange} placeholder="Url/img..." />
                        </div>
                        <div className={`${style.input_container} ${style.ic2}`}>
                            <input className={style.input} type="date" name="releaseDate" value={releaseDate} required onChange={handleChange} placeholder="Release Date" />
                        </div>
                        <div className={`${style.input_container} ${style.ic2}`}>
                            <input className={style.input} type="number" name="rating" value={rating} max="5" min="1" required onChange={handleChange} placeholder="Rating" />
                        </div>
                    </form>
                </div >
                <div className={`${style.inputCheck} ${style.al} ${style.left}`}>
                    <form>
                        <h4 className={style.subtitlePlat}>Platforms</h4>
                        {stateP.map((e) => {
                            return (
                                <div key={e.id}>
                                    <input
                                        type='checkbox'
                                        name='platforms'
                                        value={e.id}
                                        onChange={(e) => { handleChange(e) }}
                                    />
                                    <label name={e}>{e.name}</label>
                                </div>
                            )
                        })}
                    </form>
                </div>
                
                <input className={style.submit} onClick={handleSubmit} type="submit" value="Create game" />
            </div>
            <Link to="/videogames">
                <button className={style.back}>
                    back home
                </button>
            </Link>
        </div >
    );
};