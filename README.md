# UFOs

## Overview
The purpose of this project is to provide a website with an article about UFO sitings, as well as sightings data that the user is able to filter based on multiple criteria.

## Analysis Results
This website is designed to inform the user about UFO sightings and to provide data documenting specific UFO sightings. The amount of data available is large so this site also allows the user to filter the data based on one or all of five criteria; date, city, state, country, and shape.

### Filtering Examples
- The unfiltered dataset is quite large.
    - Unfiltered Data
![Unfiltered Data](https://github.com/jkannis/UFOs/blob/main/Resources/AllData.png)
- A user might choose to filter based solely on date.
    - Data filtered by date
![Date Filtered Data](https://github.com/jkannis/UFOs/blob/main/Resources/DateFiltered.png)
- A user might decide to further filter by a specific shape.
    - Data filtered by date and shape
![Date and Shape Filtered Data](https://github.com/jkannis/UFOs/blob/main/Resources/DateShapeFiltered.png)
- A user might decide to remove one of the filters.
    - Data with date filter removed
![Date Filter Removed Data](https://github.com/jkannis/UFOs/blob/main/Resources/DateRemovedFiltered.png)

## Summary
One drawback of the new website design is the data must be accessed each time a filter is entered. As the dataset grows this process could become very slow for the user.

### Future Development Recommendations
1. The filter script could be modified to wait until all filters have been entered before retrieving the data to reduce the number of times the dataset must be read and returned.
2. Rather than using input fields, dropdown lists created from existing data would give the user the opportunity to choose from available data. With the current input fields the user might enter information that does not exist in the dataset.