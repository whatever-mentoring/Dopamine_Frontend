import { useRef } from 'react';
import { useEffect, useState } from 'react';
import StyledSelectBtn from './StyledSelectBtn';
import StyledSelect from './StyledSelect';
import openIcon from '../../../assets/icons/open.svg';

const Select = ({ optionTextList, selectedOpt, setSelectedOpt }) => {
  const [isOn, setIsOn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [FocusOptIndex, setFocusOptIndex] = useState(null);
  const optionList = useRef(null);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOn(true);
    setIsOpen(!isOpen);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const nextOpt = (e) => {
    e.preventDefault(); //이 함수를 지우면 포커스 두 번 이동함
    const next = e.target.closest('li').nextElementSibling;
    if (!next) {
      e.currentTarget.firstElementChild.firstElementChild.focus();
      setFocusOptIndex(0);
    } else {
      next.firstElementChild.focus();
      setFocusOptIndex(FocusOptIndex + 1);
    }
  };

  const prevOpt = (e) => {
    e.preventDefault();
    const prev = e.target.closest('li').previousElementSibling;
    if (!prev) {
      e.currentTarget.lastElementChild.lastElementChild.focus();
      setFocusOptIndex(optionTextList.length - 1);
    } else {
      prev.lastElementChild.focus();
      setFocusOptIndex(FocusOptIndex - 1);
    }
  };

  const moveOpt = (e) => {
    // 아래 방향키 | 탭
    if (e.keyCode === 40 || (!e.shiftKey && e.keyCode === 9)) {
      nextOpt(e);
    }
    // 위 방향키 | shift + 탭
    else if (e.keyCode === 38 || (e.shiftKey && e.keyCode === 9)) {
      prevOpt(e);
    }
  };

  // 셀렉트 바깥 영역을 클릭했을 때
  useEffect(() => {
    const handleClick = (e) => {
      if (
        !e.target.classList.contains('select-btn') &&
        !e.target.closest('.list')
      ) {
        setIsOpen(false);
        setIsOn(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // 셀렉트가 open 됐을 때
  useEffect(() => {
    // 선택된 옵션이 있다면, 선택되어 있는 옵션에 포커스
    if (isOpen && FocusOptIndex !== null) {
      optionList.current.children[FocusOptIndex].firstElementChild.focus();
    }
    return;
  }, [isOpen]);

  // 옵션 선택
  const selectOpt = (e) => {
    e.target.focus();
    const li = e.target.parentNode;
    const btn = li.parentNode.previousElementSibling;
    setTimeout(() => {
      setSelectedOpt(e.target.textContent);
      setIsOpen(false);
      btn.focus();
    }, 110);
  };

  // 선택한 팀을, focus할 옵션(인덱스)으로 변경
  useEffect(() => {
    // 빈 문자열이 아니면(첫 렌더링 시, 빈 문자열)
    if (selectedOpt) {
      const i = optionTextList.indexOf(selectedOpt);
      setFocusOptIndex(i);
    }
  }, [selectedOpt]);

  return (
    <StyledSelect
      className="select"
      onKeyDown={(e) => {
        // Esc
        if (e.keyCode === 27 && isOpen) {
          handleClose(e);
          e.currentTarget.firstElementChild.focus();
        }
      }}
    >
      <StyledSelectBtn
        className={isOn ? 'select-btn on' : 'select-btn'}
        // onClick : 탭, 스페이스 포함
        onClick={handleOpen}
        onKeyDown={(e) => {
          // 아래, 위 방향키
          if (e.keyCode === 40 || e.keyCode === 38) {
            setIsOpen(true);
          }
        }}
      >
        {selectedOpt || optionTextList[0]}
        <img src={openIcon} alt="" className={isOpen ? 'open' : null} />
      </StyledSelectBtn>

      {isOpen && (
        <ul className="list" onKeyDown={moveOpt} ref={optionList}>
          {optionTextList.map((txt, i) => (
            <li key={i}>
              <button type="button" onClick={selectOpt}>
                {txt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </StyledSelect>
  );
};

export default Select;
