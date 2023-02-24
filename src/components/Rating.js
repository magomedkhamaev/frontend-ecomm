import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../redux/slices/comment';
import ReactStars from "react-rating-stars-component";

const Rating = ({id, postedby, star, comment}) => {
    //  const dispatch = useDispatch();
    //  const {items, status} = useSelector((state) => state.comment.comment)
    //  const load = status === 'loading';

    // React.useEffect(()=> {
    //     dispatch(fetchComments(id));
    //    }, [])
    //    if(load) {
    //     return <>Loadd...</>
    //   }
    return <>
    <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">{postedby}</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={star}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur fugit ut excepturi quos. Id reprehenderit
                    voluptatem placeat consequatur suscipit ex. Accusamus dolore
                    quisquam deserunt voluptate, sit magni perspiciatis quas
                    iste? */}
                    {comment}
                  </p>
                </div>
    </>
}

export default Rating;