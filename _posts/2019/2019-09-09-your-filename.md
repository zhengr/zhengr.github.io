---
published: false
---
## A New Post

Enter text in [Markdown](http://daringfireball.net/projects/markdown/). Use the toolbar above, or click the **?** button for formatting help.

{
 "cells": [
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "!pip install tushare --upgrade\n",
    "!pip install lxml\n",
    "!pip install bs4"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "import h2o\n",
    "from h2o.automl import H2OAutoML\n",
    "h2o.init()\n",
    "\n",
    "import tushare as ts\n",
    "\n",
    "# Import the prostate dataset\n",
    "#df = ts.get_hist_data('600519')\n",
    "#prostate_df = h2o.H2OFrame(df)\n",
    "\n",
    "pro = ts.pro_api('43deec70782d42f7937d54a12169fd2bbb7bbc3f1d88078eef595d43')\n",
    "df = pro.daily(ts_code='600519.SH')\n",
    "prostate_df = h2o.H2OFrame(df)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 88,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>open</th>\n",
       "      <th>high</th>\n",
       "      <th>low</th>\n",
       "      <th>close</th>\n",
       "      <th>pre_close</th>\n",
       "      <th>change</th>\n",
       "      <th>pct_chg</th>\n",
       "      <th>vol</th>\n",
       "      <th>amount</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <td>count</td>\n",
       "      <td>4000.000000</td>\n",
       "      <td>4000.000000</td>\n",
       "      <td>4000.000000</td>\n",
       "      <td>4000.000000</td>\n",
       "      <td>4000.000000</td>\n",
       "      <td>4000.000000</td>\n",
       "      <td>4000.000000</td>\n",
       "      <td>4000.000000</td>\n",
       "      <td>4.000000e+03</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <td>mean</td>\n",
       "      <td>226.388575</td>\n",
       "      <td>229.747175</td>\n",
       "      <td>223.504075</td>\n",
       "      <td>226.779090</td>\n",
       "      <td>226.453573</td>\n",
       "      <td>0.325517</td>\n",
       "      <td>0.160141</td>\n",
       "      <td>29213.930642</td>\n",
       "      <td>8.443042e+05</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <td>std</td>\n",
       "      <td>216.949569</td>\n",
       "      <td>219.888531</td>\n",
       "      <td>214.347545</td>\n",
       "      <td>217.327295</td>\n",
       "      <td>216.860283</td>\n",
       "      <td>6.507484</td>\n",
       "      <td>2.129968</td>\n",
       "      <td>23910.509217</td>\n",
       "      <td>1.198388e+06</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <td>min</td>\n",
       "      <td>20.900000</td>\n",
       "      <td>21.000000</td>\n",
       "      <td>20.710000</td>\n",
       "      <td>20.880000</td>\n",
       "      <td>20.880000</td>\n",
       "      <td>-68.000000</td>\n",
       "      <td>-11.960000</td>\n",
       "      <td>238.100000</td>\n",
       "      <td>1.421413e+03</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <td>25%</td>\n",
       "      <td>97.325000</td>\n",
       "      <td>99.980000</td>\n",
       "      <td>95.055000</td>\n",
       "      <td>97.775000</td>\n",
       "      <td>97.700000</td>\n",
       "      <td>-1.550000</td>\n",
       "      <td>-1.010000</td>\n",
       "      <td>13267.692500</td>\n",
       "      <td>1.486876e+05</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <td>50%</td>\n",
       "      <td>170.890000</td>\n",
       "      <td>173.715000</td>\n",
       "      <td>168.795000</td>\n",
       "      <td>171.000000</td>\n",
       "      <td>170.970000</td>\n",
       "      <td>0.020000</td>\n",
       "      <td>0.020000</td>\n",
       "      <td>25217.675000</td>\n",
       "      <td>4.501293e+05</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <td>75%</td>\n",
       "      <td>234.850000</td>\n",
       "      <td>238.460000</td>\n",
       "      <td>231.350000</td>\n",
       "      <td>234.585000</td>\n",
       "      <td>234.205000</td>\n",
       "      <td>1.760000</td>\n",
       "      <td>1.220000</td>\n",
       "      <td>38562.925000</td>\n",
       "      <td>9.226303e+05</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <td>max</td>\n",
       "      <td>1144.500000</td>\n",
       "      <td>1151.020000</td>\n",
       "      <td>1131.000000</td>\n",
       "      <td>1144.000000</td>\n",
       "      <td>1144.000000</td>\n",
       "      <td>56.600000</td>\n",
       "      <td>10.010000</td>\n",
       "      <td>289140.540000</td>\n",
       "      <td>1.229940e+07</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "              open         high          low        close    pre_close  \\\n",
       "count  4000.000000  4000.000000  4000.000000  4000.000000  4000.000000   \n",
       "mean    226.388575   229.747175   223.504075   226.779090   226.453573   \n",
       "std     216.949569   219.888531   214.347545   217.327295   216.860283   \n",
       "min      20.900000    21.000000    20.710000    20.880000    20.880000   \n",
       "25%      97.325000    99.980000    95.055000    97.775000    97.700000   \n",
       "50%     170.890000   173.715000   168.795000   171.000000   170.970000   \n",
       "75%     234.850000   238.460000   231.350000   234.585000   234.205000   \n",
       "max    1144.500000  1151.020000  1131.000000  1144.000000  1144.000000   \n",
       "\n",
       "            change      pct_chg            vol        amount  \n",
       "count  4000.000000  4000.000000    4000.000000  4.000000e+03  \n",
       "mean      0.325517     0.160141   29213.930642  8.443042e+05  \n",
       "std       6.507484     2.129968   23910.509217  1.198388e+06  \n",
       "min     -68.000000   -11.960000     238.100000  1.421413e+03  \n",
       "25%      -1.550000    -1.010000   13267.692500  1.486876e+05  \n",
       "50%       0.020000     0.020000   25217.675000  4.501293e+05  \n",
       "75%       1.760000     1.220000   38562.925000  9.226303e+05  \n",
       "max      56.600000    10.010000  289140.540000  1.229940e+07  "
      ]
     },
     "execution_count": 88,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.describe()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 89,
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "Rows:4000\n",
      "Cols:11\n",
      "\n",
      "\n"
     ]
    },
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<thead>\n",
       "<tr><th>       </th><th>ts_code  </th><th>trade_date       </th><th>open              </th><th>high             </th><th>low               </th><th>close             </th><th>pre_close         </th><th>change             </th><th>pct_chg            </th><th>vol              </th><th>amount            </th></tr>\n",
       "</thead>\n",
       "<tbody>\n",
       "<tr><td>type   </td><td>enum     </td><td>int              </td><td>real              </td><td>real             </td><td>real              </td><td>real              </td><td>real              </td><td>real               </td><td>real               </td><td>real             </td><td>real              </td></tr>\n",
       "<tr><td>mins   </td><td>         </td><td>20021209.0       </td><td>20.9              </td><td>21.0             </td><td>20.71             </td><td>20.88             </td><td>20.88             </td><td>-68.0              </td><td>-11.96             </td><td>238.1            </td><td>1421.413          </td></tr>\n",
       "<tr><td>mean   </td><td>         </td><td>20109693.65800001</td><td>226.38857500000034</td><td>229.7471749999997</td><td>223.50407500000009</td><td>226.77908999999914</td><td>226.45357249999984</td><td>0.32551749999999907</td><td>0.16014087500000013</td><td>29213.93064250005</td><td>844304.154130001  </td></tr>\n",
       "<tr><td>maxs   </td><td>         </td><td>20190906.0       </td><td>1144.5            </td><td>1151.02          </td><td>1131.0            </td><td>1144.0            </td><td>1144.0            </td><td>56.6               </td><td>10.01              </td><td>289140.54        </td><td>12299395.806      </td></tr>\n",
       "<tr><td>sigma  </td><td>         </td><td>48433.37820962676</td><td>216.94956904081684</td><td>219.888530889343 </td><td>214.34754534760515</td><td>217.32729511815322</td><td>216.86028302907647</td><td>6.507484127495903  </td><td>2.1299678820504258 </td><td>23910.50921703671</td><td>1198387.8325079847</td></tr>\n",
       "<tr><td>zeros  </td><td>         </td><td>0                </td><td>0                 </td><td>0                </td><td>0                 </td><td>0                 </td><td>0                 </td><td>22                 </td><td>27                 </td><td>0                </td><td>0                 </td></tr>\n",
       "<tr><td>missing</td><td>0        </td><td>0                </td><td>0                 </td><td>0                </td><td>0                 </td><td>0                 </td><td>0                 </td><td>0                  </td><td>0                  </td><td>0                </td><td>0                 </td></tr>\n",
       "<tr><td>0      </td><td>600519.SH</td><td>20190906.0       </td><td>1144.5            </td><td>1146.15          </td><td>1131.0            </td><td>1142.49           </td><td>1144.0            </td><td>-1.51              </td><td>-0.132             </td><td>26176.59         </td><td>2978155.822       </td></tr>\n",
       "<tr><td>1      </td><td>600519.SH</td><td>20190905.0       </td><td>1129.0            </td><td>1144.9           </td><td>1128.0            </td><td>1144.0            </td><td>1125.01           </td><td>18.99              </td><td>1.688              </td><td>32930.84         </td><td>3746608.087       </td></tr>\n",
       "<tr><td>2      </td><td>600519.SH</td><td>20190904.0       </td><td>1140.8            </td><td>1142.91          </td><td>1120.11           </td><td>1125.01           </td><td>1140.0            </td><td>-14.99             </td><td>-1.3149            </td><td>33600.22         </td><td>3785904.728       </td></tr>\n",
       "<tr><td>3      </td><td>600519.SH</td><td>20190903.0       </td><td>1140.0            </td><td>1151.02          </td><td>1128.56           </td><td>1140.0            </td><td>1138.76           </td><td>1.24               </td><td>0.1089             </td><td>29485.09         </td><td>3358578.409       </td></tr>\n",
       "<tr><td>4      </td><td>600519.SH</td><td>20190902.0       </td><td>1139.99           </td><td>1144.98          </td><td>1129.0            </td><td>1138.76           </td><td>1142.0            </td><td>-3.24              </td><td>-0.2837            </td><td>28234.33         </td><td>3210850.606       </td></tr>\n",
       "<tr><td>5      </td><td>600519.SH</td><td>20190830.0       </td><td>1125.0            </td><td>1146.0           </td><td>1123.0            </td><td>1142.0            </td><td>1113.1            </td><td>28.9               </td><td>2.5964             </td><td>44890.77         </td><td>5093877.152       </td></tr>\n",
       "<tr><td>6      </td><td>600519.SH</td><td>20190829.0       </td><td>1105.0            </td><td>1118.18          </td><td>1092.5            </td><td>1113.1            </td><td>1100.11           </td><td>12.99              </td><td>1.1808             </td><td>29330.42         </td><td>3247704.307       </td></tr>\n",
       "<tr><td>7      </td><td>600519.SH</td><td>20190828.0       </td><td>1109.0            </td><td>1123.19          </td><td>1083.01           </td><td>1100.11           </td><td>1109.0            </td><td>-8.89              </td><td>-0.8016            </td><td>47009.67         </td><td>5169778.985       </td></tr>\n",
       "<tr><td>8      </td><td>600519.SH</td><td>20190827.0       </td><td>1117.0            </td><td>1131.31          </td><td>1109.0            </td><td>1109.0            </td><td>1102.95           </td><td>6.05               </td><td>0.5485             </td><td>52164.21         </td><td>5830617.878       </td></tr>\n",
       "<tr><td>9      </td><td>600519.SH</td><td>20190826.0       </td><td>1113.0            </td><td>1128.0           </td><td>1096.68           </td><td>1102.95           </td><td>1130.1            </td><td>-27.15             </td><td>-2.4024            </td><td>48497.89         </td><td>5382792.365       </td></tr>\n",
       "</tbody>\n",
       "</table>"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "prostate_df.describe()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 90,
   "metadata": {},
   "outputs": [],
   "source": [
    "y=\"close\""
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 91,
   "metadata": {},
   "outputs": [],
   "source": [
    "splits = prostate_df.split_frame(ratios = [0.8], seed = 1)\n",
    "train = splits[0]\n",
    "test = splits[1]"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 92,
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "AutoML progress: |████████████████████████████████████████████████████████| 100%\n"
     ]
    }
   ],
   "source": [
    "aml = H2OAutoML(max_runtime_secs = 60, seed = 1, project_name = \"lb_frame\")\n",
    "aml.train(y = y, training_frame = train, leaderboard_frame = test)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 93,
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "AutoML progress: |████████████████████████████████████████████████████████| 100%\n"
     ]
    }
   ],
   "source": [
    "aml2 = H2OAutoML(max_runtime_secs = 60, seed = 1, project_name = \"lb_full_data\")\n",
    "aml2.train(y = y, training_frame = prostate_df)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": []
  },
  {
   "cell_type": "code",
   "execution_count": 94,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<thead>\n",
       "<tr><th>model_id                    </th><th style=\"text-align: right;\">  mean_residual_deviance</th><th style=\"text-align: right;\">   rmse</th><th style=\"text-align: right;\">    mse</th><th style=\"text-align: right;\">     mae</th><th style=\"text-align: right;\">     rmsle</th></tr>\n",
       "</thead>\n",
       "<tbody>\n",
       "<tr><td>GBM_1_AutoML_20190902_195743</td><td style=\"text-align: right;\">                 1.47397</td><td style=\"text-align: right;\">1.21407</td><td style=\"text-align: right;\">1.47397</td><td style=\"text-align: right;\">0.676295</td><td style=\"text-align: right;\">0.00505908</td></tr>\n",
       "<tr><td>GBM_1_AutoML_20190903_141511</td><td style=\"text-align: right;\">                 1.47397</td><td style=\"text-align: right;\">1.21407</td><td style=\"text-align: right;\">1.47397</td><td style=\"text-align: right;\">0.676295</td><td style=\"text-align: right;\">0.00505908</td></tr>\n",
       "<tr><td>GBM_1_AutoML_20190902_193820</td><td style=\"text-align: right;\">                 1.47397</td><td style=\"text-align: right;\">1.21407</td><td style=\"text-align: right;\">1.47397</td><td style=\"text-align: right;\">0.676295</td><td style=\"text-align: right;\">0.00505908</td></tr>\n",
       "<tr><td>GBM_1_AutoML_20190903_140645</td><td style=\"text-align: right;\">                 1.47397</td><td style=\"text-align: right;\">1.21407</td><td style=\"text-align: right;\">1.47397</td><td style=\"text-align: right;\">0.676295</td><td style=\"text-align: right;\">0.00505908</td></tr>\n",
       "<tr><td>DRF_1_AutoML_20190903_141511</td><td style=\"text-align: right;\">                 1.68656</td><td style=\"text-align: right;\">1.29868</td><td style=\"text-align: right;\">1.68656</td><td style=\"text-align: right;\">0.674264</td><td style=\"text-align: right;\">0.00429222</td></tr>\n",
       "<tr><td>DRF_1_AutoML_20190902_193820</td><td style=\"text-align: right;\">                 1.68656</td><td style=\"text-align: right;\">1.29868</td><td style=\"text-align: right;\">1.68656</td><td style=\"text-align: right;\">0.674264</td><td style=\"text-align: right;\">0.00429222</td></tr>\n",
       "<tr><td>DRF_1_AutoML_20190903_140645</td><td style=\"text-align: right;\">                 1.68656</td><td style=\"text-align: right;\">1.29868</td><td style=\"text-align: right;\">1.68656</td><td style=\"text-align: right;\">0.674264</td><td style=\"text-align: right;\">0.00429222</td></tr>\n",
       "<tr><td>DRF_1_AutoML_20190902_195743</td><td style=\"text-align: right;\">                 1.68656</td><td style=\"text-align: right;\">1.29868</td><td style=\"text-align: right;\">1.68656</td><td style=\"text-align: right;\">0.674264</td><td style=\"text-align: right;\">0.00429222</td></tr>\n",
       "<tr><td>XRT_1_AutoML_20190903_141511</td><td style=\"text-align: right;\">                 1.73416</td><td style=\"text-align: right;\">1.31688</td><td style=\"text-align: right;\">1.73416</td><td style=\"text-align: right;\">0.645585</td><td style=\"text-align: right;\">0.00422059</td></tr>\n",
       "<tr><td>XRT_1_AutoML_20190902_195743</td><td style=\"text-align: right;\">                 1.73416</td><td style=\"text-align: right;\">1.31688</td><td style=\"text-align: right;\">1.73416</td><td style=\"text-align: right;\">0.645585</td><td style=\"text-align: right;\">0.00422059</td></tr>\n",
       "</tbody>\n",
       "</table>"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    },
    {
     "data": {
      "text/plain": []
     },
     "execution_count": 94,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "aml.leaderboard.head()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": []
  },
  {
   "cell_type": "code",
   "execution_count": 95,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<thead>\n",
       "<tr><th>model_id                                           </th><th style=\"text-align: right;\">  mean_residual_deviance</th><th style=\"text-align: right;\">    rmse</th><th style=\"text-align: right;\">      mse</th><th style=\"text-align: right;\">     mae</th><th style=\"text-align: right;\">     rmsle</th></tr>\n",
       "</thead>\n",
       "<tbody>\n",
       "<tr><td>GLM_grid_1_AutoML_20190902_185942_model_1          </td><td style=\"text-align: right;\">               0.0278652</td><td style=\"text-align: right;\">0.166929</td><td style=\"text-align: right;\">0.0278652</td><td style=\"text-align: right;\">0.106801</td><td style=\"text-align: right;\">0.00713288</td></tr>\n",
       "<tr><td>StackedEnsemble_AllModels_AutoML_20190902_185942   </td><td style=\"text-align: right;\">               0.0394349</td><td style=\"text-align: right;\">0.198582</td><td style=\"text-align: right;\">0.0394349</td><td style=\"text-align: right;\">0.134086</td><td style=\"text-align: right;\">0.00850357</td></tr>\n",
       "<tr><td>StackedEnsemble_BestOfFamily_AutoML_20190902_185942</td><td style=\"text-align: right;\">               0.0426815</td><td style=\"text-align: right;\">0.206595</td><td style=\"text-align: right;\">0.0426815</td><td style=\"text-align: right;\">0.140833</td><td style=\"text-align: right;\">0.00884055</td></tr>\n",
       "<tr><td>GBM_grid_1_AutoML_20190902_185942_model_8          </td><td style=\"text-align: right;\">               0.0495339</td><td style=\"text-align: right;\">0.222562</td><td style=\"text-align: right;\">0.0495339</td><td style=\"text-align: right;\">0.147271</td><td style=\"text-align: right;\">0.00941473</td></tr>\n",
       "<tr><td>GBM_2_AutoML_20190902_185942                       </td><td style=\"text-align: right;\">               0.0519042</td><td style=\"text-align: right;\">0.227825</td><td style=\"text-align: right;\">0.0519042</td><td style=\"text-align: right;\">0.156193</td><td style=\"text-align: right;\">0.00925399</td></tr>\n",
       "<tr><td>GBM_3_AutoML_20190902_185942                       </td><td style=\"text-align: right;\">               0.0529904</td><td style=\"text-align: right;\">0.230196</td><td style=\"text-align: right;\">0.0529904</td><td style=\"text-align: right;\">0.158492</td><td style=\"text-align: right;\">0.00937731</td></tr>\n",
       "<tr><td>GBM_4_AutoML_20190902_185942                       </td><td style=\"text-align: right;\">               0.0602904</td><td style=\"text-align: right;\">0.245541</td><td style=\"text-align: right;\">0.0602904</td><td style=\"text-align: right;\">0.160588</td><td style=\"text-align: right;\">0.0103019 </td></tr>\n",
       "<tr><td>GBM_grid_1_AutoML_20190902_185942_model_2          </td><td style=\"text-align: right;\">               0.0616606</td><td style=\"text-align: right;\">0.248316</td><td style=\"text-align: right;\">0.0616606</td><td style=\"text-align: right;\">0.170937</td><td style=\"text-align: right;\">0.0104892 </td></tr>\n",
       "<tr><td>GBM_1_AutoML_20190902_185942                       </td><td style=\"text-align: right;\">               0.063141 </td><td style=\"text-align: right;\">0.251279</td><td style=\"text-align: right;\">0.063141 </td><td style=\"text-align: right;\">0.157207</td><td style=\"text-align: right;\">0.0109298 </td></tr>\n",
       "<tr><td>GBM_grid_1_AutoML_20190902_185942_model_6          </td><td style=\"text-align: right;\">               0.0645039</td><td style=\"text-align: right;\">0.253976</td><td style=\"text-align: right;\">0.0645039</td><td style=\"text-align: right;\">0.164347</td><td style=\"text-align: right;\">0.0101215 </td></tr>\n",
       "</tbody>\n",
       "</table>"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    },
    {
     "data": {
      "text/plain": []
     },
     "execution_count": 95,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "aml2.leaderboard.head()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": []
  },
  {
   "cell_type": "code",
   "execution_count": 96,
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "gbm prediction progress: |████████████████████████████████████████████████| 100%\n"
     ]
    },
    {
     "data": {
      "text/html": [
       "<table>\n",
       "<thead>\n",
       "<tr><th style=\"text-align: right;\">  predict</th></tr>\n",
       "</thead>\n",
       "<tbody>\n",
       "<tr><td style=\"text-align: right;\"> 1135.5  </td></tr>\n",
       "<tr><td style=\"text-align: right;\"> 1102.37 </td></tr>\n",
       "<tr><td style=\"text-align: right;\">  963.186</td></tr>\n",
       "<tr><td style=\"text-align: right;\">  963.267</td></tr>\n",
       "<tr><td style=\"text-align: right;\">  974.597</td></tr>\n",
       "<tr><td style=\"text-align: right;\">  996.573</td></tr>\n",
       "<tr><td style=\"text-align: right;\">  975.432</td></tr>\n",
       "<tr><td style=\"text-align: right;\">  910.998</td></tr>\n",
       "<tr><td style=\"text-align: right;\">  869.787</td></tr>\n",
       "<tr><td style=\"text-align: right;\">  889.516</td></tr>\n",
       "</tbody>\n",
       "</table>"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    },
    {
     "data": {
      "text/plain": []
     },
     "execution_count": 96,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "pred = aml.predict(test)\n",
    "pred.head()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 97,
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "\n",
      "ModelMetricsRegression: gbm\n",
      "** Reported on test data. **\n",
      "\n",
      "MSE: 1.4739741984261734\n",
      "RMSE: 1.2140733908731274\n",
      "MAE: 0.6762945751646032\n",
      "RMSLE: 0.005059084721700143\n",
      "Mean Residual Deviance: 1.4739741984261734\n"
     ]
    },
    {
     "data": {
      "text/plain": []
     },
     "execution_count": 97,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "perf = aml.leader.model_performance(test)\n",
    "perf"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": []
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": []
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.7.4"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 4
}
