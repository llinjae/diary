import DiaryItem from './DiaryItem';

const DiaryList = ({ diaryList, onRemove, onEdit }) => {
  return (
    <div className='DiaryList'>
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

// undefined로 전달될 것 같은 props가 기본값을 설정할 수 있도록 함.
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
