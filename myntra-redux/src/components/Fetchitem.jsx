import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemsAction } from "../store/Items";
import { fetchStatusAction } from "../store/fetchstatusSlice";

const Fetchitem = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusAction.markfetchingstarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusAction.markfetchDone());
        dispatch(fetchStatusAction.markfetchingdone());
        dispatch(ItemsAction.addinitialitem(items[0]));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return (
    <>
    </>
  );
};

export default Fetchitem;
