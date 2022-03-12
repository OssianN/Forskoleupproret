import React from "react"
import NavigationButton from "./NavigationButton"

const CategoryNavigation = ({ handleArticleListPick, showArticleList }) => {
  return (
    <div className="press__categories-list">
      <NavigationButton
        title="Nyheter"
        handleArticleListPick={handleArticleListPick}
        showArticleList={showArticleList}
      />
      <NavigationButton
        title="Vittnesmål"
        handleArticleListPick={handleArticleListPick}
        showArticleList={showArticleList}
      />
      <NavigationButton
        title="Publicerat"
        handleArticleListPick={handleArticleListPick}
        showArticleList={showArticleList}
      />
    </div>
  )
}

export default CategoryNavigation
