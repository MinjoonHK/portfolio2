import { useEffect } from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./project.css";

export type ProjectCarouselImage = {
  imgSrc: string;
  imgTitle?: string;
};

type ProjectImageModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  images: ProjectCarouselImage[];
};

function ArrowIcon({ points }: { points: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points={points} />
    </svg>
  );
}

export default function ProjectImageModal({
  isOpen,
  onRequestClose,
  images,
}: ProjectImageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.querySelector(".modal-content")?.classList.add("open");
      document.body.style.overflow = "hidden";
    } else {
      document.querySelector(".modal-content")?.classList.remove("open");
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <Modal
      className="modalContent"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={500}
    >
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onRequestClose();
          }
        }}
        className="modalInner"
      >
        <button
          type="button"
          className="modalCloseButton"
          onClick={onRequestClose}
          aria-label="닫기"
        >
          ✕
        </button>
        <div
          className="modalCarouselWrapper"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Carousel
            swipeable
            useKeyboardArrows
            showStatus={false}
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <button
                  type="button"
                  className="customArrowLeft"
                  onClick={onClickHandler}
                  aria-label="이전 이미지"
                >
                  <ArrowIcon points="15 18 9 12 15 6" />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <button
                  type="button"
                  className="customArrowRight"
                  onClick={onClickHandler}
                  aria-label="다음 이미지"
                >
                  <ArrowIcon points="9 18 15 12 9 6" />
                </button>
              )
            }
          >
            {images.map((img, idx) => (
              <div key={`CarouselImg${idx}`} className="CarouselImageBox">
                <img
                  src={img.imgSrc}
                  alt={img.imgTitle ?? `프로젝트 이미지 ${idx + 1}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </Modal>
  );
}
