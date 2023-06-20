import { useSelector, useDispatch } from "react-redux";
import { selectVisiblePositions } from "store/positions/positions-selectors";
import { selectFilters } from "store/filters/filter-selectors";
import { addFilter } from "store/filters/filter-actions";
import { JobPosition } from "./JobPosition";

const JobList = () => {
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );
  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className='job-list'>
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  );
};

export { JobList };
