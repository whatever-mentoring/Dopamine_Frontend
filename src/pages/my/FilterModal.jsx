import { useCallback, useEffect, useRef, useState } from 'react';
import Overlay from '../../components/common/modal/Overlay';
import StyledModal from './StyledModal';
import Select from '../../components/common/select/Select';
import { getFeedsFilter } from '../../api/feed';

const FilterModal = ({ setIsModalOpen, setFilterOpt, filterOpt }) => {
  const thisYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(
    filterOpt === '전체보기' ? '전체보기' : filterOpt.split(' ')[0]
  );
  const [filter, setFilter] = useState({});

  /* 모달 기본 기능 */
  const modal = useRef(null);
  useEffect(() => {
    // 모달 외 클릭 시 모달 close
    const closeModal = (e) => {
      if (e.target.tagName === 'HTML') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('click', closeModal);
    window.addEventListener('touchstart', closeModal);

    return () => {
      window.removeEventListener('click', closeModal);
      window.removeEventListener('touchstart', closeModal);
    };
  }, []);

  const setModal = useCallback((node) => {
    if (modal.current || !node) {
      return;
    }
    modal.current = node;
    node.showModal();
  }, []);
  /* ------------ */

  const monthList = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];

  const handleBtn = (v) => {
    setFilterOpt(`${selectedYear} ${v}월`);
    setIsModalOpen(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const data = [];
        for (let i = 0; i < 3; i++) {
          const res = await getFeedsFilter(thisYear - i);
          const json = await res.json();
          data[`${thisYear - i}년`] = json;
        }
        setFilter(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (selectedYear === '전체보기') {
      setFilterOpt('전체보기');
    }
  }, [selectedYear]);

  return (
    <>
      {Object.keys(filter).length > 0 && (
        <Overlay>
          <StyledModal
            ref={(node) => {
              if (node) {
                setModal(node);
              }
            }}
          >
            <p>어떤 날의 기록이 궁금하세요?</p>
            <Select
              selectedOpt={selectedYear}
              setSelectedOpt={setSelectedYear}
              optionTextList={[
                '전체보기',
                `${thisYear}년`,
                `${thisYear - 1}년`,
                `${thisYear - 2}년`,
              ]}
            ></Select>
            <ul>
              {monthList.map((v, i) => {
                return (
                  <li key={i}>
                    <button
                      onClick={() => handleBtn(v)}
                      disabled={
                        '전체보기' === selectedYear
                          ? true
                          : !filter[selectedYear][i].feedYn
                      }
                      className={
                        selectedYear === '전체보기'
                          ? ''
                          : filter[selectedYear][i].feedYn
                          ? 'selected'
                          : ''
                      }
                    >
                      {v}월
                    </button>
                  </li>
                );
              })}
            </ul>
          </StyledModal>
        </Overlay>
      )}
    </>
  );
};

export default FilterModal;
