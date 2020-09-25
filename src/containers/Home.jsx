import React,{ useEffect, useState } from 'react';
import '../assets/styles/App.scss';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import useInitialState from '../hooks/useInitialState';
import Header from '../components/Header';



const Home = ({mylist, trends, originals, documental, searchResult }) => {

    return(
        <>
        <Header/>
        <Search isHome/>

        {   Object.keys(searchResult).length >0  &&
        (   
            <Categories title='Resultados de la busqueda...'>
                    <Carousel>
                        {searchResult.map((item) => (
                            <CarouselItem key={item.id} {...item} categoria={'mylist'}/>
                        ))}
                    </Carousel>
                </Categories>

        )

        }
        {   mylist.length > 0 && (
                <Categories title='Mi Lista'>
                    <Carousel>
                        {mylist.map((item) => (
                            <CarouselItem key={item.id} {...item} categoria={'mylist'}/>
                        ))}
                    </Carousel>
                </Categories>
        )}
        
                <Categories title='Tendencias'>
                    <Carousel>
                        {trends.map((item) => (
                            <CarouselItem key={item.id} {...item}/>
                        ))}
                    </Carousel>
                </Categories>
        
        
                <Categories title='Originales'>
                    <Carousel>
                        {originals.map((item) => (
                            <CarouselItem key={item.id} {...item} />
                        ))}
                    </Carousel>
                </Categories>
        
                <Categories title='Documentales'>
                    <Carousel>
                        {documental.map((item) => (
                            <CarouselItem key={item.id} {...item} />
                        ))}
                    </Carousel>
                </Categories>
        
        </>
    );
};

const mapStateToProps = state => {
    return{
        mylist : state.mylist,
        trends : state.trends,
        originals: state.originals,
        documental: state.documental,
        searchResult: state.searchResult,
    };
};

export default connect(mapStateToProps, null)(Home);