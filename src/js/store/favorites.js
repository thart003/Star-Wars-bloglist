import create from "zustand";
import { persist } from "zustand/middleware";

export const useFavorites = create(
	persist(
		set => ({
			favorites: {
				planets: [],
				people: [],
				vehicles: []
			},

			addFavorite: (favorite, type) => {
				set(state => ({ favorites: { ...state.favorites, [type]: [...state.favorites[type], favorite] } }));
			},

			removeFavorite: (favorite, type) => {
				set(state => ({
					favorites: {
						...state.favorites,
						[type]: state.favorites[type].filter(item => {
							return item.uid !== favorite.uid;
						})
					}
				}));
			}
		}),
		{
			name: "favorites",
			getStorage: () => localStorage
		}
	)
);
