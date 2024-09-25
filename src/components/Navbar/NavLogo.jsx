export const NavLogo = ({ header }) => {
return (
        <svg width="13rem" height="auto" viewBox="0 0 247 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill={`${header ? "#FFF" : "#1C597C"}`} stroke="none">

                <path d="M83.872 39.02C84.544 38.996 85.06 38.888 85.42 38.696C85.78 38.48 
86.032 38.12 86.176 37.616C86.32 37.088 86.392 36.368 86.392 35.456V21.092C86.392 20.492 86.404 
19.916 86.428 19.364C86.476 18.812 86.512 18.38 86.536 18.068C86.128 18.092 85.66 18.116 85.132 
18.14C84.604 18.14 84.184 18.152 83.872 18.176V15.8C85.432 15.776 87.004 15.764 88.588 15.764C90.172
15.764 91.756 15.752 93.34 15.728C95.524 15.704 97.408 15.98 98.992 16.556C100.576 17.108 101.788 
17.96 102.628 19.112C103.468 20.24 103.888 21.704 103.888 23.504C103.888 24.464 103.684 25.424 
103.276 26.384C102.892 27.32 102.268 28.196 101.404 29.012C100.564 29.804 99.448 30.452 98.056 
30.956C96.688 31.46 95.032 31.736 93.088 31.784C92.704 31.784 92.332 31.784 91.972 31.784C91.612 
31.784 91.264 31.772 90.928 31.748V35.6C90.928 36.272 90.916 36.884 90.892 37.436C90.868 37.988 
90.832 38.42 90.784 38.732C91.096 38.708 91.444 38.696 91.828 38.696C92.212 38.672 92.596 38.66 
92.98 38.66C93.388 38.636 93.7 38.624 93.916 38.624V41H83.872V39.02ZM90.928 29.48C91.24 29.504 
91.54 29.528 91.828 29.552C92.116 29.576 92.428 29.588 92.764 29.588C94.108 29.588 95.236 29.348 
96.148 28.868C97.084 28.388 97.792 27.704 98.272 26.816C98.752 25.904 98.992 24.8 98.992 
23.504C98.992 22.328 98.824 21.368 98.488 20.624C98.152 19.88 97.708 19.316 97.156 18.932C96.604 
18.524 95.992 18.248 95.32 18.104C94.648 17.96 93.976 17.888 93.304 17.888C92.68 17.888 92.188 
17.984 91.828 18.176C91.492 18.368 91.252 18.716 91.108 19.22C90.988 19.7 90.928 20.36 90.928 
21.2V29.48ZM114.194 41.576C112.466 41.576 110.93 41.192 109.586 40.424C108.242 39.632 107.198 
38.528 106.454 37.112C105.71 35.672 105.338 33.98 105.338 32.036C105.338 30.356 105.71 28.784 
106.454 27.32C107.198 25.856 108.242 24.68 109.586 23.792C110.954 22.88 112.538 22.424 114.338 
22.424C115.346 22.424 116.318 22.568 117.254 22.856C118.19 23.144 119.03 23.624 119.774 
24.296C120.518 24.968 121.106 25.856 121.538 26.96C121.994 28.064 122.21 29.408 122.186 
30.992L110.09 31.208C110.09 32.696 110.258 34.016 110.594 35.168C110.954 36.296 111.53 37.196 
112.322 37.868C113.114 38.516 114.158 38.84 115.454 38.84C116.03 38.84 116.642 38.744 117.29 
38.552C117.962 38.336 118.622 38.024 119.27 37.616C119.918 37.184 120.494 36.656 120.998 
36.032L122.366 37.292C121.574 38.444 120.698 39.332 119.738 39.956C118.778 40.58 117.818 41 
116.858 41.216C115.898 41.456 115.01 41.576 114.194 41.576ZM110.27 29.048H117.758C117.734 28.088 
117.59 27.284 117.326 26.636C117.086 25.964 116.726 25.46 116.246 25.124C115.766 24.764 115.178 
24.584 114.482 24.584C113.306 24.584 112.358 24.98 111.638 25.772C110.942 26.54 110.486 27.632 
110.27 29.048ZM135.293 41C135.221 40.64 135.173 40.34 135.149 40.1C135.149 39.836 135.137 39.536 
135.113 39.2C134.297 40.016 133.421 40.616 132.485 41C131.573 41.384 130.625 41.576 129.641 
41.576C128.009 41.576 126.749 41.132 125.861 40.244C124.997 39.356 124.565 38.264 124.565 
36.968C124.565 35.816 124.877 34.844 125.501 34.052C126.125 33.236 126.941 32.576 127.949 
32.072C128.957 31.544 130.073 31.148 131.297 30.884C132.521 30.596 133.733 30.44 134.933 
30.416V28.436C134.933 27.74 134.849 27.104 134.681 26.528C134.537 25.928 134.261 25.46 
133.853 25.124C133.445 24.764 132.845 24.584 132.053 24.584C131.525 24.608 130.985 24.728 
130.433 24.944C129.905 25.136 129.485 25.448 129.173 25.88C129.365 26.096 129.485 26.336 129.533 
26.6C129.581 26.84 129.605 27.056 129.605 27.248C129.605 27.68 129.437 28.136 129.101 28.616C128.765 
29.072 128.225 29.288 127.481 29.264C126.833 29.24 126.329 29.012 125.969 28.58C125.633 
28.148 125.465 27.632 125.465 27.032C125.465 26.12 125.789 25.328 126.437 24.656C127.109 
23.96 128.009 23.42 129.137 23.036C130.265 22.628 131.525 22.424 132.917 22.424C134.981 22.424 
136.565 22.964 137.669 24.044C138.773 25.124 139.313 26.852 139.289 29.228C139.289 30.068 139.289 
30.836 139.289 31.532C139.289 32.204 139.277 32.888 139.253 33.584C139.253 34.256 139.253 35.012 
139.253 35.852C139.253 36.212 139.241 36.668 139.217 37.22C139.193 37.748 139.157 38.276 139.109 
38.804C139.541 38.756 139.973 38.732 140.405 38.732C140.861 38.708 141.233 38.684 141.521 
38.66V41H135.293ZM134.897 32.54C134.177 32.588 133.469 32.708 132.773 32.9C132.077 33.068 
131.453 33.308 130.901 33.62C130.349 33.932 129.905 34.328 129.569 34.808C129.257 35.264 129.113 
35.792 129.137 36.392C129.161 37.136 129.401 37.688 129.857 38.048C130.313 38.384 130.841 38.552 
131.441 38.552C132.137 38.552 132.761 38.408 133.313 38.12C133.889 37.832 134.417 37.448 134.897 36.968C134.897 
36.728 134.897 36.476 134.897 36.212C134.897 35.948 134.897 35.684 134.897 35.42C134.897 35.084 
134.897 34.664 134.897 34.16C134.897 33.656 134.897 33.116 134.897 32.54ZM152.339 41.576C150.731
41.576 149.243 41.216 147.875 40.496C146.531 39.776 145.451 38.732 144.635 37.364C143.843 35.972 
143.447 34.304 143.447 32.36C143.447 31.04 143.675 29.792 144.131 28.616C144.587 27.416 145.223 
26.36 146.039 25.448C146.879 24.512 147.875 23.78 149.027 23.252C150.179 22.7 151.451 22.424 152.843 
22.424C154.307 22.424 155.543 22.652 156.551 23.108C157.559 23.54 158.327 24.128 158.855 
24.872C159.383 25.592 159.647 26.36 159.647 27.176C159.647 27.824 159.455 28.388 159.071 
28.868C158.711 29.348 158.183 29.6 157.487 29.624C156.671 29.648 156.095 29.42 155.759 28.94C155.447 
28.436 155.291 27.968 155.291 27.536C155.291 27.296 155.327 27.044 155.399 26.78C155.471 26.492 
155.591 26.228 155.759 25.988C155.591 25.556 155.315 25.244 154.931 25.052C154.547 24.836 154.151 
24.692 153.743 24.62C153.335 24.548 153.011 24.524 152.771 24.548C151.451 24.596 150.359 25.196 
149.495 26.348C148.631 27.5 148.199 29.18 148.199 31.388C148.199 32.708 148.379 33.932 148.739 
35.06C149.123 36.164 149.699 37.064 150.467 37.76C151.235 38.432 152.219 38.78 153.419 
38.804C154.475 38.828 155.495 38.576 156.479 38.048C157.463 37.496 158.267 36.788 158.891 
35.924L160.331 37.256C159.539 38.384 158.687 39.26 157.775 39.884C156.863 40.508 155.939 
40.94 155.003 41.18C154.091 41.444 153.203 41.576 152.339 41.576ZM171.112 41.576C169.384 
41.576 167.848 41.192 166.504 40.424C165.16 39.632 164.116 38.528 163.372 37.112C162.628 
35.672 162.256 33.98 162.256 32.036C162.256 30.356 162.628 28.784 163.372 27.32C164.116 
25.856 165.16 24.68 166.504 23.792C167.872 22.88 169.456 22.424 171.256 22.424C172.264 
22.424 173.236 22.568 174.172 22.856C175.108 23.144 175.948 23.624 176.692 24.296C177.436 
24.968 178.024 25.856 178.456 26.96C178.912 28.064 179.128 29.408 179.104 30.992L167.008 
31.208C167.008 32.696 167.176 34.016 167.512 35.168C167.872 36.296 168.448 37.196 169.24 
37.868C170.032 38.516 171.076 38.84 172.372 38.84C172.948 38.84 173.56 38.744 174.208 
38.552C174.88 38.336 175.54 38.024 176.188 37.616C176.836 37.184 177.412 36.656 177.916 
36.032L179.284 37.292C178.492 38.444 177.616 39.332 176.656 39.956C175.696 40.58 174.736 
41 173.776 41.216C172.816 41.456 171.928 41.576 171.112 41.576ZM167.188 29.048H174.676C174.652 
28.088 174.508 27.284 174.244 26.636C174.004 25.964 173.644 25.46 173.164 25.124C172.684 24.764 
172.096 24.584 171.4 24.584C170.224 24.584 169.276 24.98 168.556 25.772C167.86 26.54 167.404 27.632 
167.188 29.048ZM180.298 41V38.948C180.97 38.948 181.51 38.756 181.918 38.372C182.326 37.988 182.662 
37.484 182.926 36.86C183.19 36.212 183.466 35.492 183.754 34.7L190.918 15.152H192.862L200.674 
35.06C200.818 35.468 201.01 36.044 201.25 36.788C201.49 37.532 201.622 38.18 201.646 38.732C202.054 
38.708 202.45 38.684 202.834 38.66C203.218 38.636 203.554 38.624 203.842 
38.624V41H194.662V39.02C195.406 39.02 195.91 38.864 196.174 38.552C196.438 38.24 196.546 37.832 
196.498 37.328C196.474 36.824 196.354 36.308 196.138 35.78L195.238 33.332L186.886 33.476L186.094 
35.888C185.95 36.296 185.782 36.764 185.59 37.292C185.398 37.796 185.206 38.252 185.014 
38.66C185.446 38.636 185.914 38.612 186.418 38.588C186.946 38.564 187.366 38.552 187.678 
38.552V41H180.298ZM187.678 31.172H194.446L192.502 25.88C192.214 25.064 191.938 24.248 191.674 
23.432C191.434 22.592 191.23 21.824 191.062 21.128H190.99C190.846 21.608 190.666 22.232 190.45 
23C190.258 23.768 189.982 24.644 189.622 25.628L187.678 31.172ZM204.617 50.18V48.272C205.313 
48.272 205.805 48.116 206.093 47.804C206.405 47.516 206.597 47.096 206.669 46.544C206.741 45.992 
206.777 45.368 206.777 44.672L206.813 28.724C206.813 28.292 206.813 27.836 206.813 27.356C206.837 
26.876 206.885 26.384 206.957 25.88C206.549 25.904 206.093 25.928 205.589 25.952C205.109 25.976 
204.713 26 204.401 26.024V23.684C205.505 23.684 206.393 23.636 207.065 23.54C207.761 23.42 208.289 
23.276 208.649 23.108C209.033 22.94 209.309 22.784 209.477 22.64H211.025C211.073 22.88 211.109 
23.168 211.133 23.504C211.157 23.84 211.181 24.152 211.205 24.44C211.997 23.744 212.837 23.24 
213.725 22.928C214.613 22.592 215.465 22.424 216.281 22.424C217.721 22.424 219.005 22.796 220.133 
23.54C221.261 24.26 222.149 25.304 222.797 26.672C223.445 28.016 223.769 29.612 223.769 
31.46C223.769 33.428 223.373 35.18 222.581 36.716C221.813 38.228 220.757 39.416 219.413 
40.28C218.069 41.144 216.521 41.576 214.769 41.576C214.049 41.576 213.401 41.492 212.825 
41.324C212.249 41.18 211.709 40.988 211.205 40.748V45.032C211.205 45.416 211.193 45.872 211.169 
46.4C211.169 46.952 211.133 47.48 211.061 47.984C211.445 47.936 211.853 47.9 212.285 47.876C212.717 
47.876 213.077 47.876 213.365 47.876V50.18H204.617ZM214.373 39.308C215.477 39.284 216.365 38.948 
217.037 38.3C217.733 37.628 218.237 36.74 218.549 35.636C218.861 34.532 219.017 33.332 219.017 
32.036C219.017 30.86 218.861 29.744 218.549 28.688C218.261 27.632 217.793 26.78 217.145 
26.132C216.497 25.484 215.633 25.16 214.553 25.16C213.881 25.184 213.245 25.352 212.645 
25.664C212.069 25.976 211.589 26.384 211.205 26.888C211.205 27.416 211.205 27.956 211.205 
28.508C211.205 29.06 211.205 29.648 211.205 30.272C211.205 30.896 211.205 31.604 211.205 
32.396C211.205 33.164 211.205 34.04 211.205 35.024C211.205 36.008 211.205 37.136 211.205 
38.408C211.589 38.672 212.057 38.888 212.609 39.056C213.161 39.224 213.749 39.308 214.373 
39.308ZM226.203 50.18V48.272C226.899 48.272 227.391 48.116 227.679 47.804C227.991 47.516 228.183 
47.096 228.255 46.544C228.327 45.992 228.363 45.368 228.363 44.672L228.399 28.724C228.399 
28.292 228.399 27.836 228.399 27.356C228.423 26.876 228.471 26.384 228.543 25.88C228.135 
25.904 227.679 25.928 227.175 25.952C226.695 25.976 226.299 26 225.987 26.024V23.684C227.091 
23.684 227.979 23.636 228.651 23.54C229.347 23.42 229.875 23.276 230.235 23.108C230.619 22.94 
230.895 22.784 231.063 22.64H232.611C232.659 22.88 232.695 23.168 232.719 23.504C232.743 
23.84 232.767 24.152 232.791 24.44C233.583 23.744 234.423 23.24 235.311 22.928C236.199 
22.592 237.051 22.424 237.867 22.424C239.307 22.424 240.591 22.796 241.719 23.54C242.847 24.26 
243.735 25.304 244.383 26.672C245.031 28.016 245.355 29.612 245.355 31.46C245.355 33.428 244.959 
35.18 244.167 36.716C243.399 38.228 242.343 39.416 240.999 40.28C239.655 41.144 238.107 41.576 
236.355 41.576C235.635 41.576 234.987 41.492 234.411 41.324C233.835 41.18 233.295 40.988 232.791 
40.748V45.032C232.791 45.416 232.779 45.872 232.755 46.4C232.755 46.952 232.719 47.48 232.647 
47.984C233.031 47.936 233.439 47.9 233.871 47.876C234.303 47.876 234.663 47.876 234.951 
47.876V50.18H226.203ZM235.959 39.308C237.063 39.284 237.951 38.948 238.623 38.3C239.319 
37.628 239.823 36.74 240.135 35.636C240.447 34.532 240.603 33.332 240.603 32.036C240.603 30.86 
240.447 29.744 240.135 28.688C239.847 27.632 239.379 26.78 238.731 26.132C238.083 25.484 237.219 
25.16 236.139 25.16C235.467 25.184 234.831 25.352 234.231 25.664C233.655 25.976 233.175 26.384 
232.791 26.888C232.791 27.416 232.791 27.956 232.791 28.508C232.791 29.06 232.791 29.648 232.791 
30.272C232.791 30.896 232.791 31.604 232.791 32.396C232.791 33.164 232.791 34.04 232.791 
35.024C232.791 36.008 232.791 37.136 232.791 38.408C233.175 38.672 233.643 38.888 234.195 
39.056C234.747 39.224 235.335 39.308 235.959 39.308Z"/>
                <path  d="M16.2485 0.971579C17.3556 
0.334284 18.6114 -0.00081467 19.8895 1.48729e-06H45.1154C46.3919 0.000884616 47.6456 0.336789 
48.7509 0.973999C49.8561 1.61121 50.7739 2.5273 51.4121 3.63032L64.0251 25.4122C64.6638 26.516 65 
27.768 65 29.0426C65 30.3171 64.6638 31.5691 64.0251 32.6729L51.417 54.4548C50.7779 55.5592 49.8586 
56.4762 48.7515 57.1135C47.6444 57.7508 46.3886 58.0859 45.1105 58.0851H41C40.9984 50.0616 40.9047 
43.274 36.0941 34.9931C35.8758 34.6173 35.6634 34.2588 35.4569 33.916C37.7744 33.6649 39.9631 
33.1211 41.8693 32.1712C43.8517 31.1833 45.5741 29.7314 46.7442 27.7011C47.9113 25.6761 48.4084 
23.2855 48.2896 20.6115C48.1402 17.2492 47.1617 14.4541 45.3677 12.3389C43.5756 10.226 41.1941 
9.0563 38.7157 8.53752C33.8913 7.52772 28.3039 8.87541 23.9286 11.0006L22.0808 11.8981L22.2495 
13.9454C22.8005 20.6332 23.422 24.404 24.5514 27.3463C16.7287 25.9537 8.51572 22.8557 3.96481 
20.2468L13.583 3.63032C14.2221 2.52588 15.1414 1.60887 16.2485 0.971579ZM0.959077 25.4397C0.330679 
26.5367 0 27.7786 0 29.0426C0 30.3171 0.33623 31.5691 0.974894 32.6729L13.5878 54.4548C14.2261 
55.5578 15.1439 56.4739 16.2491 57.1111C17.3544 57.7483 18.6081 58.0842 19.8846 
58.0851H34.9999C34.9952 50.147 34.8536 44.8024 30.906 38.0069C29.9327 36.3316 29.0923 35.0348 
28.3417 33.9107C28.2781 33.905 28.2145 33.8991 28.1509 33.8932C18.325 32.9719 7.02244 28.9211 
0.959077 25.4397ZM30.5125 26.0415C29.6333 24.1665 28.9958 21.6508 28.4181 15.5877C31.5979 14.3684 
34.9344 13.8761 37.4864 14.4103C38.9495 14.7165 40.037 15.3298 40.7919 16.2199C41.5449 17.1077 
42.1914 18.5354 42.2955 20.8779C42.374 22.6445 42.036 23.8544 41.5458 24.705C41.0587 25.5501 40.3017 
26.2486 39.1932 26.801C37.3911 27.6991 34.818 28.1284 31.6679 28.0843C31.1991 27.3536 30.8322 
26.7231 30.5125 26.0415Z"/>

            </g>
        </svg>
    )
}