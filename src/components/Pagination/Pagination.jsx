import React from 'react'
import styles from './style.module.css'

const Pagination = ({
  totalPages,
  currentPage,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage === 1}
        onClick={handlePrevPage}
        className={styles.arrow}
      >
        {'<'}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={styles.pageNumber}
              key={index}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          )
        })}
      </div>
      <button
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
        className={styles.arrow}
      >
        {'>'}
      </button>
    </div>
  )
}

export default Pagination
