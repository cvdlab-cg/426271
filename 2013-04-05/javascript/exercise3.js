//realize the sud face
s_face_1 = R([0,1])(PI/2)(R([1,2])(PI/2)(SIMPLEX_GRID([[13.5], [-5, -0.6, -4.1, 0.9, -4.1, 3.2, -2.2, 1.9]])))

s_face_2 = R([0,1])(PI/2)(R([1,2])(PI/2)(SIMPLEX_GRID([[0.5], [-5, 0.6, 4.1, 0.9, 4.1, -3.2, 2.2, 1.9]])))

s_face_3 = R([0,1])(PI/2)(R([1,2])(PI/2)(SIMPLEX_GRID([[-13, 0.5], [-5, 0.6, 4.1, 0.9, 4.1, -3.2, 2.2, 1.9]])))

s_face_4 = R([0,1])(PI/2)(R([1,2])(PI/2)(SIMPLEX_GRID([[-10.5, 0.5], [-5, 0.6, 4.1, 0.9, 4.1, 3.2, 2.2, 1.9]])))

s_face_5 = R([0,1])(PI/2)(R([1,2])(PI/2)(SIMPLEX_GRID([[11], [-5, 0.6]])))

south = T([1])([-0.1])(STRUCT([s_face_1, s_face_2, s_face_3, s_face_4, s_face_5]))

//realize the est face
e_face_1 = R([1,2])(PI/2)(SIMPLEX_GRID([[22.5], [-5, 2.5, -2.2, 2.8, -2.2, 3.2, -2.2, 1.9]]))

e_face_2 = R([1,2])(PI/2)(SIMPLEX_GRID([[-16.5, 5.5], [-5, 2.5, 2.2, 2.8, 2.2, 3.2, 2.2, 1.9]]))

e_face_3 = R([1,2])(PI/2)(SIMPLEX_GRID([[11], [-5, 2.5, 2.2]]))

e_face_4 = R([1,2])(PI/2)(SIMPLEX_GRID([[11], [-5, 2.5, 2.2, 2.8, 2.2]]))

east = T([2])([-0.1])(STRUCT([e_face_1, e_face_2, e_face_3, e_face_4]))

//realize the north face
n_face_1 = T([0])([22.5])(R([0,1])(PI/2)(R([1,2])(PI/2)(SIMPLEX_GRID([[13.5], [-5, 2.5, -2.2, 2.8, -2.2, 3.2, -2.2, 1.9]]))))

n_face_2 = T([0])([22.5])(R([0,1])(PI/2)(R([1,2])(PI/2)(SIMPLEX_GRID([[-13, 0.5], [-5, 2.5, 2.2, 2.8, 2.2, 3.2, 2.2, 1.9]]))))

n_face_3 = T([0])([22.5])(R([0,1])(PI/2)(R([1,2])(PI/2)(SIMPLEX_GRID([[-10, 2, -0.5, 0.5], [-5, 2.5, 2.2, 2.8, 2.2, 3.2, 2.2, 1.9]]))))

north = STRUCT([n_face_1, n_face_2, n_face_3])

//realize the west face
w_face_1 = T([0,1])([22.5, 13.5])(R([1,2])(PI/2)(R([0,2])(PI)(SIMPLEX_GRID([[22.5], [-5, 2.5, -2.2, 2.8, 2.2, 3.2, 2.2, 1.9]]))))

w_face_2 = T([0,1])([22.5, 13.5])(R([1,2])(PI/2)(R([0,2])(PI)(SIMPLEX_GRID([[6], [5, 2.5, 2.2, 2.8, 2.2, 3.2, 2.2, 1.9]]))))

w_face_3 = T([0,1])([22.5, 13.5])(R([1,2])(PI/2)(R([0,2])(PI)(SIMPLEX_GRID([[-6, -5, 11.5], [-5, 2.5, 2.2, 2.8, 2.2, 3.2, 2.2, 1.9]]))))

west = STRUCT([w_face_1, w_face_2, w_face_3])

faces = STRUCT([south, east, north, west])